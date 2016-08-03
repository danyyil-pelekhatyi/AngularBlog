var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var uglify      = require('gulp-uglify');
var streamify   = require('gulp-streamify');
var cleanCSS = require('gulp-clean-css');
var source = require('vinyl-source-stream');
var jasmine = require('gulp-jasmine');

var server = require('karma').Server;

// Connect task
gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000,
        livereload: true
	})
})

gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/app.js')
    	// bundles and uglyfies  it, creates a file called all.min.js
        .bundle()
        .pipe(source('all.min.js'))
        //.pipe(streamify(uglify()))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
})

gulp.task('minify', function() {
  return gulp.src('app/css/**/*.*')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload());;
});

gulp.task('publish', function() {
    return gulp.src('app/features/**/*.html')
    .pipe(gulp.dest('public/views/'))
    .pipe(connect.reload());;
})

gulp.task('publish2', function() {
    return gulp.src('app/directives/**/*.html')
    .pipe(gulp.dest('public/views/directives/'))
    .pipe(connect.reload());;
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('app/css/*.css', ['minify']);
    gulp.watch('app/features/**/*.html', ['publish'])
    gulp.watch('app/directives/**/*.html', ['publish2'])
})

gulp.task('tdd', function (done) {
  new server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});

gulp.task('default', ['browserify', 'minify', 'publish', 'publish2', 'connect', 'tdd', 'watch'])