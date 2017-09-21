import { Test } from './components/test/test';
import { TestQuestion } from './components/test/models/test-question.model';
import { Http } from './utils/http';
import { Renderify } from './render-engine/renderify';
import TrafficSignalsCatalogTemplate from './components/test/templates/traffic-signals-catalog.hbs';


let question = new TestQuestion( 1, "Pregunta #1", [], "Repuesta" );
let test = new Test( [] );

let serviceURL = 'http://projects-api.webtraining.zone:4000/traffic-signals/v1/signals';


export class App {

	constructor() {

	}

	static getTrafficSignalsData() {
		return new Promise( ( resolve, reject ) => {
			Http.get( serviceURL ).then( ( response ) => {
				let widget = new Renderify( {
					selector: '#app',
					compiledTemplate: TrafficSignalsCatalogTemplate,
					data: response.data
				} );
				widget.render();
				resolve( response.data );
			} );
		} );
	}

	static renderTrafficSignalsCatalog( selector, data ) {

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

