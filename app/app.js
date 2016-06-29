require('angular')
require('angular-route')

var LoginService = require('./services/LoginService')
var UserService = require('./services/UserService')
var ThemeService = require('./services/ThemeService')
var MainController = require('./controllers/MainController')
var BlogController = require('./controllers/BlogController')
var LoginController = require('./controllers/LoginController')

angular.module('app', ['ngRoute'])
	.service('UserService', ['$log', UserService])
	.service('LoginService', ['UserService', '$location', '$log', LoginService])
	.service('ThemeService', [ThemeService])
	.controller('MainController', ['ThemeService', 'LoginService', '$route', MainController])
	.controller('BlogController', ['UserService', '$routeParams', '$log', BlogController])
	.controller('LoginController', ['$scope', 'LoginService', LoginController])
	.config(['$routeProvider', '$logProvider',
		function($routeProvider, $logProvider) {
			$logProvider.debugEnabled(true);
			$routeProvider
				.when('/login', {
					controller: "LoginController as login",
					templateUrl: "views/Login.html"
				})
				.when('/blogs/:username', {
					controller: "BlogController as blog",
					templateUrl: 'views/Blog.html'
				})
				.otherwise('/');
		}
	])
	.run(['$rootScope', '$log', '$location', 'LoginService', function($rootScope, $log, $location, LoginService) {
		$rootScope.$on('$routeChangeStart', function(event, current, previous) {
			$log.debug('$routeChangeStart - location: ' + $location.path());
			if($location.path() == '/') {
				if (LoginService.isLoggedIn()) {
					$log.debug(LoginService.getCurrentUser().username);
					$location.path('blogs/' + LoginService.getCurrentUser().username);
				} else {
					$log.debug('Redirected to login page');
					$location.path('/login');
				}
			}
			if ($location.path().indexOf('/blogs/') > -1 && !LoginService.isLoggedIn()) {
				$location.path('/login');
			}
		});
	}]);
