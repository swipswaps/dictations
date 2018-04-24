class PicoRenderer {
  static render(sequence, lang) {
    var text = "";

    sequence.forEach(object => {
      switch (object.type) {
        case "SENTENCE":
          text += this.renderSentence (object);
          break;
        case "PONCTUATION":
          text += this.renderPonctuation (object, lang);
          break;
        case "SILENCE":
          text += this.renderSilence (object);
          break;
        default:
          break;
      }
      text += " ";
    });

    return text;
  }

  static renderSentence(object) {
    const speed = Math.floor(object.speed * 100);
    return "<speed level='" + speed +"'>" + object.value + "</speed>";
  }
  static renderPonctuation(object, lang) {
    switch (lang) {
      case "en-GB":
        return this.renderPonctuationEN(object);
      case "fr-FR":
        return this.renderPonctuationFR(object);
      default:
        break;
    }
  }
  static renderPonctuationEN(object) {
    switch (object.value) {
      case '?':
        return "<speed level='100'>Question mark.</speed>";
      case '.':
        return "<speed level='100'>Full stop.</speed>";
      case ',':
        return "<speed level='100'>Comma,</speed>";
      case ';':
        return "<speed level='100'>Semicolon;</speed>";
      case '!':
        return "<speed level='100'>Exclamation mark.</speed>";
      default:
        break;
    }
  }
  static renderPonctuationFR(object) {
    switch (object.value) {
      case '?':
        return "<speed level='100'>Point d'intérogation.</speed>";
      case '.':
        return "<speed level='100'>Point.</speed>";
      case ',':
        return "<speed level='100'>Virgule,</speed>";
      case ';':
        return "<speed level='100'>Point virgule;</speed>";
      case '!':
        return "<speed level='100'>Point d'exclamation.</speed>";
      default:
        break;
    }
  }
  static renderSilence(object) {
    var str = "";
    for (var i = 0; i < object.value; i++) {
      str += "xx";
    }
    return "<volume level='0'>" + str +".</volume>";
  }
}

export default PicoRenderer;
