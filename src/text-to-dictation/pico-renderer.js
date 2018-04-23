class PicoRenderer {
  static render(sequence) {
    var text = "";

    sequence.forEach(object => {
      switch (object.type) {
        case "SENTENCE":
          text += this.renderSentence (object);
          break;
        case "PONCTUATION":
          text += this.renderPonctuation (object);
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
  static renderPonctuation(object) {
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
