class BasicCompositor {
  static compose(tokens) {
    var sequence = [];

    sequence.push (this.makeSilence(2));

    var buf = [];
    tokens.forEach(token => {
      switch (token.type) {
        case "WORD":
          buf.push (token);
          break;
        case "PONCTUATION":
          const ponctuation = token;
          const groups = this.divideSentence (buf, 4, 5);
          for (var i = 0; i < groups.length; i++) {
            const group = groups[i];
            if (i === groups.length - 1) {
              const sentenceNormal = this.composeSentence(group, ponctuation, 1.0);
              const sentenceSlow = this.composeSentence(group, ponctuation, 0.7);
              sequence.push (sentenceNormal);
              sequence.push (ponctuation);
              sequence.push (this.makeSilence(2));
              sequence.push (sentenceSlow);
              sequence.push (ponctuation);
            } else {
              const sentenceNormal = this.composeSentence(group, this.makeComma(), 1.0);
              const sentenceSlow = this.composeSentence(group, this.makeComma(), 0.7);
              sequence.push (sentenceNormal);
              sequence.push (this.makeSilence(2));
              sequence.push (sentenceSlow);
            }
            sequence.push (this.makeSilence(3));
          };
          buf = [];
          break;
        default:
          break;
      }
    });

    sequence.push (this.makeSilence(6));
    const text = this.composeText (tokens, 0.8);
    sequence.push (text);

    return sequence;
  }

  static divideSentence (words, minSize, maxSize) {
    if (words.length % minSize === 0) {
      return this._divideSentence(words, minSize);
    }
    if (words.length % maxSize === 0) {
      return this._divideSentence(words, maxSize);
    }
    if (words.length % minSize > words.length % maxSize) {
      return this._divideSentence(words, minSize);
    } else {
      return this._divideSentence(words, maxSize);
    }
  }
  static _divideSentence (words, size) {
    var groups = [];

    var group = [];
    for (var i = 0; i < words.length; i++) {
      group.push (words[i]);
      if ((i > 0 && i % size === 0) || i === words.length -1) {
        groups.push (group);
        group = [];
      }
    }

    return groups;
  }


  static composeSentence(words, ponctuation, speed) {
    var str = "";
    for (var i = 0; i < words.length; i++) {
      str += words[i].value;
      if (i < words.length - 1) {
        str += " ";
      }
    }
    if (ponctuation) {
      str += ponctuation.value;
    }
    return {
      type: "SENTENCE",
      value: str,
      speed: speed
    }
  }

  static makeSilence(val) {
    return {
      type: "SILENCE",
      value: val
    }
  }

  static makeComma() {
    return {
      type: "PONCTUATION",
      value: ','
    }
  }

  static composeText(tokens, speed) {
    var str = "";
    for (var i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      str += token.value;

      if (i < tokens.length - 1) {
        const nextToken = tokens[i+1];
        if (nextToken.type !== "PONCTUATION") {
          str += " ";
        }
      }
    }
    return {
      type: "SENTENCE",
      value: str,
      speed: speed
    }
  }
}

export default BasicCompositor;
