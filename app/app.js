require('angular')
require('angular-route')

var LoginService = require('./services/LoginService')
var DatabaseService = require('./services/DatabaseService')
var UsersService = require('./services/UsersService')
var FriendsService = require('./services/FriendsService')
var FavoritesService = require('./services/FavoritesService')
var ArticlesService = require('./services/ArticlesService')
var PopupService = require('./services/PopupService')
var BlogController = require('./controllers/BlogController')
var NewArticleController = require('./controllers/NewArticleController')
var LoginController = require('./controllers/LoginController')
var FriendsController = require('./controllers/FriendsController')
var FavoritesController = require('./controllers/FavoritesController')
var PopularController = require('./controllers/PopularController')
var PopupController = require('./controllers/PopupController')
var ArticlesDirective = require('./directives/ArticlesDirective')
var NewArticleDirective = require('./directives/NewArticleDirective')
var UserListDirective = require('./directives/UserListDirective')

angular.module('app', ['ngRoute'])
	.service('DatabaseService', ['PopupService', '$log', '$location', DatabaseService])
	.service('PopupService', ['$interval', PopupService])
	.service('LoginService', ['DatabaseService', 'PopupService', '$location', '$log', LoginService])
	.service('FriendsService', ['LoginService', 'DatabaseService', FriendsService])
	.service('FavoritesService', ['DatabaseService', 'LoginService', FavoritesService])
	.service('UsersService', ['DatabaseService', UsersService])
	.service('ArticlesService', ['DatabaseService', 'LoginService', ArticlesService])
	.controller('BlogController', ['UsersService', 'ArticlesService', 'LoginService', 'FriendsService', 'FavoritesService', '$routeParams', '$log', BlogController])
	.controller('NewArticleController', ['ArticlesService', 'LoginService', '$routeParams', NewArticleController])
	.controller('LoginController', ['LoginService', LoginController])
	.controller('FriendsController', ['LoginService', 'FriendsService', '$log', FriendsController])
	.controller('FavoritesController', ['LoginService', 'FavoritesService', FavoritesController])
	.controller('PopularController', ['ArticlesService', PopularController])
	.controller('PopupController', ['PopupService', PopupController])
	.directive('articles', ArticlesDirective)
	.directive('newArticle', NewArticleDirective)
	.directive('userList', UserListDirective)
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
				.when('/favorite', {
					controller: "FavoritesController as favorites",
					templateUrl: "views/Favorites.html"
				})
				.when('/blogs/:username', {
					controller: "BlogController as blog",
					templateUrl: 'views/Blog.html'
				})
				.when('/popular', {
					controller: "PopularController as popular",
					templateUrl: 'views/Popular.html'
				})
				.otherwise('/');
		}
	])
	.run(['$rootScope', '$log', '$location', 'LoginService', function($rootScope, $log, $location, LoginService) {
		$rootScope.$on('$routeChangeStart', function(event, current, previous) {
			//$log.debug('$routeChangeStart - location: ' + $location.path());
			//$log.debug('You are logged in: ' + LoginService.isLoggedIn());
			if($location.path() == '/' && LoginService.isLoggedIn()) {
				$location.path('/blogs/' + LoginService.getCurrentUser().username);
			} else {
				if($location.path() !== '/login' && !LoginService.isLoggedIn()) {
					//$log.debug('Redirected to login page');
					$location.path('/login');
				}
			}
		});
	}]);
