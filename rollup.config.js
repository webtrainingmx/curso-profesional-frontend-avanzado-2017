import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: './src/js/app.js',
	output: {
		file: './dist/js/bundle.js',
		format: 'iife'
	},
	name: 'ConductorGenial',
	plugins: [
		resolve( {
			// pass custom options to the resolve plugin
			customResolveOptions: {
				moduleDirectory: 'node_modules',
				jsnext: true,
				main: true
			}
		} ),
		babel( {
			exclude: 'node_modules/**' // only transpile our source code
		} )
		// commonjs( {
		// 	include: 'node_modules/**',  // Default: undefined
		// 	ignoreGlobal: false,  // Default: false
		// 	sourceMap: false,  // Default: true
		//
		// } )
	],
	// indicate which modules should be treated as external
	// external: [ 'axios' ]
};