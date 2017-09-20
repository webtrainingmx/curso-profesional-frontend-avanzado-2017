import { TestQuestion } from './test-question.model';

export class ComplexTestQuestion extends TestQuestion {
	constructor( type, question, options, answer ) {
		super( type, question, options, answer );
	}
}