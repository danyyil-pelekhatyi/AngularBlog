(function() {
	angular
		.module('app')
		.controller('AdminPageController', ['LoginService', 'ArticlesService',
			AdminPageController]);

	function AdminPageController(LoginService, ArticlesService) {
		var vm = this;
		vm.getArticles = _getArticles;

		function _getArticles() {
			return ArticlesService.getArticlesByUsername(LoginService.getCurrentUser(),
				LoginService.getCurrentUser().username);
		}
	}
})()