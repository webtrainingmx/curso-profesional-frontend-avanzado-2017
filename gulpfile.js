const fileInclude = require( 'gulp-file-include' );
const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );

const rename = require( 'gulp-rename' );
const cleanCSS = require( 'gulp-clean-css' );
const sourcemaps = require( 'gulp-sourcemaps' );

// SASS Compilation Tasks
gulp.task( 'sass', () => {
	return gulp.src( './src/scss/main.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( rename( 'all-styles.css' ) )
		.pipe( cleanCSS( { compatibility: 'ie8' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'sass:watch', () => {
	gulp.watch( './src/scss/**/**/*.scss', [ 'sass' ] );
} );

// File Include Tasks
gulp.task( 'fileInclude', () => {
	gulp.src( [ 'src/index.html' ] )
		.pipe( fileInclude( {
			prefix: '@@',
			basepath: '@file',
		} ) ).pipe( gulp.dest( './dist' ) );
} );

// Main Tasks
gulp.task( 'watch', [ 'sass:watch' ] );

gulp.task( 'build', [ 'sass', 'fileInclude' ] );