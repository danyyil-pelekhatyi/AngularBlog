(function() {
	angular.module('app')
		.controller('BlogController',
			['UsersService', 'ArticlesService', 'LoginService', 'FriendsService',
			 'FavoritesService', '$routeParams', '$log', BlogController])

	function BlogController(UsersService, ArticlesService, LoginService, FriendsService, FavoritesService, $routeParams, $log) {
		var vm = this;
		vm.blogAuthor = UsersService.getUserByUsername($routeParams.username);
		vm.getArticlesByUsername = ArticlesService.getArticlesByUsername;
		vm.onTheUsersPage = LoginService.onTheUsersPage;
		vm.isFavorite = _isFavorite;
		vm.isFriend = _isFriend;
		vm.addFavoriteClicked = _addFavoriteClicked;
		vm.addFriendClicked = _addFriendClicked;
		vm.upVote = ArticlesService.upVote;
		vm.downVote = ArticlesService.downVote;
		vm.isUpVotedByUser = ArticlesService.isUpVotedByUser;
		vm.isDownVotedByUser = ArticlesService.isDownVotedByUser;

		function _isFavorite() {
			return FavoritesService.isFavorite($routeParams.username);
		}

		function _isFriend() {
			return FriendsService.isFriend($routeParams.username);
		}

		function _addFavoriteClicked() {
			if (!_isFavorite()) {
				FavoritesService.addFavorite(vm.blogAuthor);
			} else {
				FavoritesService.removeFavorite(vm.blogAuthor);
			}
		}

		function _addFriendClicked() {
			if (!_isFriend()) {
				FriendsService.addFriend(vm.blogAuthor);
			} else {
				var areYouSure = 
					window.confirm("Are you sure you want to delete " +
					vm.blogAuthor.username + " from friends?");
				if (areYouSure) {
					FriendsService.removeFriend(vm.blogAuthor);
				}
			}
		}
	}
})()