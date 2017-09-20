import { Test } from './components/test/test';
import { TestQuestion } from './components/test/models/test-question.model';
import { Http } from './utils/http';

let question = new TestQuestion( 1, "Pregunta #1", [], "Repuesta" );
let test = new Test( [] );

let serviceURL = 'http://projects-api.webtraining.zone:4000/traffic-signals/v1/signals';


export class App {

	constructor() {
		this.signals = [];
	}

	static getTrafficSignalsData() {
		return new Promise( ( resolve, reject ) => {
			Http.get( serviceURL ).then( ( response ) => {
				resolve( response.data );
			} );
		} );
	}

	static renderTrafficSignalsCatalog( selector, data ) {
		let template = `{{#each signals}}`;
		let container = document.querySelector( selector );
		container.innerHTML = template;

		console.log( "Rendering with", container, data );
	}

	init() {

		App.getTrafficSignalsData()
			.then( ( data ) => {
				const selector = '#app';
				App.renderTrafficSignalsCatalog( selector, data );
			} );
	}
}

const app = new App();
app.init();

