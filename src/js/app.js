import { Test } from './components/test/test';
import { TestQuestion } from './components/test/models/test-question.model';
import { Http } from './utils/http';

let question = new TestQuestion( 1, "Pregunta #1", [], "Repuesta" );
let test = new Test( [] );
console.log( test, question );