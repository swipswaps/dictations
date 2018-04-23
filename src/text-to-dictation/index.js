import Lexer from './lexer';
import BasicCompositor from './basic-compositor'
import PicoRenderer from './pico-renderer'

function textToDictation(text) {
  const lexer = new Lexer (text);
  const tokens = lexer.tokenize();

  const sequence = BasicCompositor.compose(tokens);

  const result = PicoRenderer.render (sequence);

  return result;
}

export default textToDictation;
