import { Compiler } from './compiler';

export class Renderify {

	constructor( options = { source: null, compiledTemplate: null, data: {}, selector: null } ) {
		this.settings = options;
	}

	createHTML() {
		if ( ! this.settings.source && this.settings.compiledTemplate ) {
			return this.settings.compiledTemplate( this.settings.data );
		}
		else if ( this.settings.source ) {
			const template = Compiler.compileTemplate( this.settings.source );
			return template( this.settings.data );
		}
	}

	render() {
		if ( ! this.settings.selector ) throw ('Selector was not set');

		const container = document.querySelector( this.settings.selector );
		container.innerHTML = this.createHTML();
	}


}