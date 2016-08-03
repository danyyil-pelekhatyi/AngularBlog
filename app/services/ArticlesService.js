(function() {
	angular.module('app')
		.service('ArticlesService',
			['DatabaseService', 'LoginService', '$log', ArticlesService])

	function ArticlesService(DatabaseService, LoginService, $log) {
		var editingArticle = {};

		return {
			setEditArticle: _setEditArticle,
			saveEditArticle: _saveEditArticle,
			cancelEditArticle: _cancelEditArticle,
			getArticlesByUsername: _getArticlesByUsername,
			getArticleById: _getArticleById,
			addArticle: DatabaseService.addArticle,
			downVote: _downVote,
			upVote: _upVote,
			isUpVotedByUser: _isUpVotedByUser,
			isDownVotedByUser: _isDownVotedByUser,
			getPopularArticles: DatabaseService.getPopularArticles
		}

		function _getArticlesByUsername(user, username) {
			var articles = DatabaseService.getArticlesByUsername(user, username);
			for(i in articles) {
				if ( editingArticle && articles[i].id == editingArticle.id )
					articles[i].editMode = true;
				else
					articles[i].editMode = false;
			}
			return articles;
		}

		function _getArticleById(id) {
			return DatabaseService.getArticleById(id);
		}

		function _setEditArticle(article) {
			if (article.editMode) {
				_cancelEditArticle(article)
			} else {
				editingArticle = angular.copy(article);
				article.editMode = true;
			}
			return editingArticle;
		}

		function _saveEditArticle(article, newArticle) {
			article.article = newArticle.article;
			article.heading = newArticle.heading;
			article.publishDate = newArticle.publishDate;
			_cancelEditArticle(article);
			DatabaseService.editArticle(article);
		}

		function _cancelEditArticle(article) {
			article.editMode = false;
			editingArticle = null;
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
})()