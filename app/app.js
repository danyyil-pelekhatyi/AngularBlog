require('angular')
require('angular-route')
var app = angular.module('app', ['ngRoute']);
require('./services/LoginService')
require('./services/DatabaseService')
require('./services/UsersService')
require('./services/FriendsService')
require('./services/FavoritesService')
require('./services/ArticlesService')
require('./services/PopupService')
require('./features/Blog/BlogController')
require('./features/NewArticle/NewArticleController')
require('./features/Login/LoginController')
require('./features/Friends/FriendsController')
require('./features/Favorites/FavoritesController')
require('./features/Popular/PopularController')
require('./features/Popup/PopupController')
require('./features/AdminPage/AdminPageController')
require('./features/ArticlesEdit/ArticlesEditController')
require('./directives/Articles/ArticlesDirective')
require('./directives/ContentEditable/ContentEditableDirective')
require('./directives/NewArticle/NewArticleDirective')
require('./directives/UserList/UserListDirective')
	
app.config(['$routeProvider', '$logProvider',
		function($routeProvider, $logProvider) {
			$logProvider.debugEnabled(true);
			$routeProvider
				.when('/friends', {
					controller: "FriendsController as friends",
					templateUrl: "views/Friends/Friends.html"
				})
				.when('/login', {
					controller: "LoginController as login",
					templateUrl: "views/Login/Login.html"
				})
				.when('/favorite', {
					controller: "FavoritesController as favorites",
					templateUrl: "views/Favorites/Favorites.html"
				})
				.when('/blogs/:username', {
					controller: "BlogController as blog",
					templateUrl: 'views/Blog/Blog.html'
				})
				.when('/popular', {
					controller: "PopularController as popular",
					templateUrl: 'views/Popular/Popular.html'
				})
				.when('/my_posts', {
					controller: "AdminPageController as admin",
					templateUrl: 'views/AdminPage/AdminPage.html'
				})
				.otherwise('/');
		}
	])
	.run(['$rootScope', '$log', '$location', 'LoginService',
		function($rootScope, $log, $location, LoginService) {
			$rootScope.$on('$routeChangeStart', function(event, current, previous) {
				if($location.path() == '/' && LoginService.isLoggedIn()) {
					$location.path('/blogs/' + LoginService.getCurrentUser().username);
				} else {
					if($location.path() !== '/login' && !LoginService.isLoggedIn()) {
						$location.path('/login');
					}
				}
			});
		}
	]);