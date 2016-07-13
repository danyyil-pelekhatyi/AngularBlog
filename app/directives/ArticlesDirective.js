module.exports = function ($compile) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'views/directives/Articles.html',
		scope: {
			articles: "=articles",
			onUsersPage: "=onUsersPage",
			isUpVotedByUser: "=isUpVotedByUser",
			isDownVotedByUser: "=isDownVotedByUser",
			upVote: "=upVote",
			downVote: "=downVote",
			sortOrder: "=sortOrder"
		}
	}
}