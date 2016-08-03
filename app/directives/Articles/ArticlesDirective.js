(function() {
	angular
		.module("app")
		.directive('articles', ArticlesDirective)

	function ArticlesDirective($compile) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'views/directives/Articles/Articles.html',
			scope: {
				articles: "=articles",
				onUsersPage: "=onUsersPage",
				isUpVotedByUser: "=isUpVotedByUser",
				isDownVotedByUser: "=isDownVotedByUser",
				upVote: "=upVote",
				downVote: "=downVote",
				sortOrder: "=sortOrder"
			},
			controller: 'ArticlesEditController',
			controllerAs: 'vm'
		}
	}
})()