class Lexer {
  constructor(text) {
    this.pos = 0;
    this.buf = text;
    this.bufLen = text.length;
  }

  tokenize() {
    var tokens = []
    var token;
    while ((token = this.nextToken()) !== null) {
      tokens.push(token);
    }
    return tokens;
  }

  nextToken() {
    this.skipNonTokens();
    if (this.pos >= this.bufLen) {
      return null;
    }

    const c = this.buf.charAt(this.pos);
    if (this.isPonctuation(c)) {
      return this.processPonctuation();
    } else {
      return this.processWord();
    }
  }

  skipNonTokens() {
    while (this.pos < this.bufLen) {
      const c = this.buf.charAt(this.pos);
      if (this.isWhiteSpace(c)) {
        this.pos++;
      } else {
        break;
      }
    }
  }

  isWhiteSpace(c) {
    return c === ' ' || c === '\t' || c === '\r' || c === '\n';
  }

  isPonctuation(c) {
    return c === ',' || c === ';' || c === '?' || c === '!' || c === '.';
  }

  processPonctuation() {
    const pos = this.pos;
    const c = this.buf.charAt(this.pos);
    this.pos++;
    const token = {
      type: "PONCTUATION",
      value: c,
      pos: pos
    }
    return token;
  }

  processWord() {
    const pos = this.pos;
    var endPos = pos + 1;

    while (endPos < this.bufLen) {
      const c = this.buf.charAt(endPos);
      if (this.isWhiteSpace(c) || this.isPonctuation(c)) {
        break;
      }
      endPos++;
    }

    const word = this.buf.substring(pos, endPos);
    this.pos = endPos;

    const token = {
      type: "WORD",
      value: word,
      pos: pos
    }
    return token;
  }
}

export default Lexer;
