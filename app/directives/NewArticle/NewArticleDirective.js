(function() {
	angular
		.module("app")
		.directive('newArticle', NewArticleDirective)

	function NewArticleDirective($compile) {
		return {
			replace: true,
			templateUrl: 'views/directives/NewArticle/NewArticle.html'
		}
	}
})()