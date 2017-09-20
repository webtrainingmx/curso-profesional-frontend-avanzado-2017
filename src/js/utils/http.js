import axios from 'axios/dist/axios';

export class Http {
	static request( url, config = { method: 'get', data: {}, headers: {} } ) {
		const finalConfig = Object.assign( config );

		return axios.request( url, finalConfig );
	}

	static get( url, config ) {
		return this.request( url, config );

	}

	static post( url, config ) {
		return this.request( url, Object.assign( { method: 'post', config } ) );
	}

	static put( url, config ) {
		return this.request( url, Object.assign( { method: 'put', config } ) );
	}

	static deleteRequest( url, config ) {
		return this.request( url, Object.assign( { method: 'delete', config } ) );
	}
}