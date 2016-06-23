var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

// Connect task
gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000
	})
})

gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/app.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'))
        .pipe(livereload());
})

gulp.task('reload', () => {
	return livereload.reload();
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify']);
})

gulp.task('watch2', function() {
	livereload.listen({
		port: "4000",
		host: "localhost",
		basePath: "localhost:4000",
		start: true,
		quiet: false,
		reloadPage: "index.html"
	});
	gulp.watch('public/**/*.*', ['reload']);
})

gulp.task('default', ['connect', 'watch', 'watch2'])