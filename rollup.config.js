import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import handlebars from 'rollup-plugin-handlebars-plus';
// import rootImport from 'rollup-plugin-root-import';
// let partialRoots = [ `${__dirname}/src/client/js/views/`, `${__dirname}/src/common/views/` ];

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
			exclude: [ 'node_modules/**', 'src/js/components/**/templates/*.hbs' ] // only transpile our source code
		} ),
		commonjs( {
			include: 'node_modules/**'
		} ),
		// Required by use of `partialRoot` below.
		// rootImport( {
		// 	root: partialRoots
		// } ),
		handlebars( {
			// helpers: [ '/src/js/render-engine/helpers.js' ]
		} )
	],
	watch: {
		include: 'src/js/**'
	}
	// indicate which modules should be treated as external
	// external: [ 'axios' ]
};