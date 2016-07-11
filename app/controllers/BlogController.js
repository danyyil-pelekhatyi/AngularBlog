module.exports = function(UsersService, ArticlesService, LoginService, FriendsService, FavoritesService, $routeParams, $log) {
	var vm = this;
	vm.blogAuthor = UsersService.getUserByUsername($routeParams.username);
	vm.getArticlesByUsername = ArticlesService.getArticlesByUsername;
	vm.onTheUsersPage = LoginService.onTheUsersPage;
	vm.isFavorite = FavoritesService.isFavorite($routeParams.username);
	vm.isFriend = FriendsService.isFriend($routeParams.username);
	vm.addFavoriteClicked = _addFavoriteClicked;
	vm.addFriendClicked = _addFriendClicked;
	vm.upVote = ArticlesService.upVote;
	vm.downVote = ArticlesService.downVote;
	vm.isUpVotedByUser = ArticlesService.isUpVotedByUser;
	vm.isDownVotedByUser = ArticlesService.isDownVotedByUser;

	function _addFavoriteClicked() {
		if (!vm.isFavorite) {
			FavoritesService.addFavorite(vm.blogAuthor);
		} else {
			FavoritesService.removeFavorite(vm.blogAuthor);
		}
		vm.isFavorite = !vm.isFavorite;
	}

	function _addFriendClicked() {
		if (!vm.isFriend) {
			FriendsService.addFriend(vm.blogAuthor);
		} else {
			var areYouSure = 
				window.confirm("Are you sure you want to delete " +
				vm.blogAuthor.username + " from friends?");
			if (areYouSure) {
				FriendsService.removeFriend(vm.blogAuthor);
				vm.isFriend = !vm.isFriend;
			}
		}
	}
}