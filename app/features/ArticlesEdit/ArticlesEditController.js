(function() {
	angular
		.module('app')
		.controller('ArticlesEditController', ['ArticlesService',
			ArticlesEditController]);

	function ArticlesEditController(ArticlesService) {
		var vm = this;
		vm.onArticleEditClick = _onArticleEditClick;
		vm.onArticleSaveEditClick = _onArticleSaveEditClick;
		vm.onArticleCancelEditClick = _onArticleCancelEditClick;
		vm.editingArticle = {};

		function _onArticleEditClick(article) {
			vm.editingArticle = angular.copy(ArticlesService.setEditArticle(article));
		}

		function _onArticleSaveEditClick(article) {
			ArticlesService.saveEditArticle(article, vm.editingArticle);
		}

		function _onArticleCancelEditClick(article) {
			ArticlesService.cancelEditArticle(article);
		}
	}
})()