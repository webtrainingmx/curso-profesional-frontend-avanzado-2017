import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: './src/js/app.js',
	output: {
		file: './dist/js/bundle.js',
		format: 'umd'
	},
	name: 'ConductorGenial',
	plugins: [
		resolve( {
			browser: true, // Needed by axios to be correctly included in the bundle.jsclear
			customResolveOptions: {
				moduleDirectory: 'node_modules',
				jsnext: true,
				main: true
			}
		} ),
		babel( {
			exclude: 'node_modules/**' // only transpile our source code
		} ),
		commonjs( {
			// include: 'node_modules/**'
		} )
	],
	watch: {
		include: 'src/js/**'
	}
	// indicate which modules should be treated as external
	// external: [ 'axios' ]
};