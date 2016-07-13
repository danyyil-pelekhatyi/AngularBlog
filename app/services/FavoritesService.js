module.exports = function(DatabaseService, LoginService) {
	return {
		isFavorite: _isFavorite,
		addFavorite: _addFavorite,
		removeFavorite: _removeFavorite,
		getFavorites: DatabaseService.getFavorites
	}

	function _isFavorite(username) {
		return LoginService.getCurrentUser().favoritesId
			.indexOf(DatabaseService.getUserByUsername(username).id) > -1;
	}

	function _addFavorite(user) {
		var currentUser = LoginService.getCurrentUser();
		DatabaseService.addFavorite(currentUser, user);
	}

	function _removeFavorite(user) {
		var currentUser = LoginService.getCurrentUser();
		DatabaseService.removeFavorite(currentUser, user);
	}
}