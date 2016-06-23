'use strict';

module.exports = function(karma) {
  karma.set({
  	files: [
  		'node_modules/angular/angular.js',
    	'node_modules/angular-mocks/angular-mocks.js',
  		'app/app.js',
  		'app/controllers/**/*.js',
  		'app/directives/**/*.js',
  		'app/services/**/*.js',
  		'app/tests/**/*.js'
    ],

    frameworks: [ 'jasmine', 'browserify'],

    plugins: ["karma-browserify",
    	"karma-jasmine",
    	"karma-chrome-launcher",
    	"karma-phantomjs-launcher",
    	"karma-requirejs",
    	"karma-spec-reporter"],

    reporters: [ 'spec' ],

    preprocessors: {
  		'app/app.js': [ 'browserify' ],
  		'app/tests/**/*.js': [ 'browserify' ]
    },

    browsers: [ 'Chrome' ], //PhantomJS

    logLevel: 'LOG_DEBUG',

    singleRun: false,
    autoWatch: true,

    // browserify configuration
    browserify: {
      debug: true
    }
  });
};