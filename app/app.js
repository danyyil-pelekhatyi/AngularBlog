require('angular')
require('angular-route')

var LoginService = require('./services/LoginService')
var DatabaseService = require('./services/DatabaseService')
var ThemeService = require('./services/ThemeService')
var MainController = require('./controllers/MainController')
var BlogController = require('./controllers/BlogController')
var NewArticleController = require('./controllers/NewArticleController')
var LoginController = require('./controllers/LoginController')
var FriendsController = require('./controllers/FriendsController')
var ArticlesDirective = require('./directives/ArticlesDirective')
var NewArticleDirective = require('./directives/NewArticleDirective')

angular.module('app', ['ngRoute'])
	.service('DatabaseService', ['$log', DatabaseService])
	.service('LoginService', ['DatabaseService', '$location', '$log', LoginService])
	.service('ThemeService', [ThemeService])
	.controller('MainController', ['ThemeService', 'LoginService', '$location', MainController])
	.controller('BlogController', ['DatabaseService', '$routeParams', '$log', BlogController])
	.controller('NewArticleController', ['DatabaseService', '$routeParams', NewArticleController])
	.controller('LoginController', ['LoginService', LoginController])
	.controller('FriendsController', ['$scope', 'DatabaseService', FriendsController])
	.directive('articles', ArticlesDirective)
	.directive('newArticle', NewArticleDirective)
	.config(['$routeProvider', '$logProvider',
		function($routeProvider, $logProvider) {
			$logProvider.debugEnabled(true);
			$routeProvider
				.when('/friends', {
					controller: "FriendsController as friends",
					templateUrl: "views/Friends.html"
				})
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
			$log.debug('You are logged in: ' + LoginService.isLoggedIn());
			if($location.path() == '/' && LoginService.isLoggedIn()) {
				$location.path('/blogs/' + LoginService.getCurrentUser().username);
			} else {
				if($location.path() !== '/login' && !LoginService.isLoggedIn()) {
					$log.debug('Redirected to login page');
					$location.path('/login');
				}
			}
		});
	}]);
