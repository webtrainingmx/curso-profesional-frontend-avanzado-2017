import { QuestionTypes } from './models/question-types.enum';

export class Test {


	constructor( questions = [] ) {

		this.questions = questions;
	}

	addQuestion( question ) {
		this.questions.push( question );
	}

	addQuestions( questions ) {
		this.questions = this.questions.concat( questions );
	}

	getQuestionsByType( type = QuestionTypes.ONLY_STRING ) {
		return this.questions.filter( question => question.type === type );
	}
}