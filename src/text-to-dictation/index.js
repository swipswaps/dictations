import Lexer from './lexer';
import BasicCompositor from './basic-compositor'
import PicoRenderer from './pico-renderer'

function textToDictation(message) {
  const lexer = new Lexer (message.text);
  const tokens = lexer.tokenize();

  const sequence = BasicCompositor.compose(tokens);

  const result = PicoRenderer.render (sequence, message.lang);

  return result;
}

export default textToDictation;
