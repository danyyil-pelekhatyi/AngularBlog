module.exports = function(DatabaseService, LoginService) {
	return {
		getArticlesByUsername: DatabaseService.getArticlesByUsername,
		addArticle: DatabaseService.addArticle,
		downVote: _downVote,
		upVote: _upVote,
		isUpVotedByUser: _isUpVotedByUser,
		isDownVotedByUser: _isDownVotedByUser,
		getPopularArticles: DatabaseService.getPopularArticles
	}

	function _downVote(article) {
		DatabaseService.downVoteArticle(LoginService.getCurrentUser(), article);
	}

	function _upVote(article) {
		DatabaseService.upVoteArticle(LoginService.getCurrentUser(), article);
	}

	function _isUpVotedByUser(article) {
		return article.upVotesBy.indexOf(LoginService.getCurrentUser().id) > -1;
	}

	function _isDownVotedByUser(article) {
		return article.downVotesBy.indexOf(LoginService.getCurrentUser().id) > -1;
	}
}