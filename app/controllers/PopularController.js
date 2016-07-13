module.exports = function(ArticlesService) {
	var vm = this;

	vm.getPopularArticles = _getPopularArticles;
	vm.upVote = ArticlesService.upVote;
	vm.downVote = ArticlesService.downVote;
	vm.isUpVotedByUser = ArticlesService.isUpVotedByUser;
	vm.isDownVotedByUser = ArticlesService.isDownVotedByUser;

	function _getPopularArticles() {
		return ArticlesService.getPopularArticles(10);
	}
}