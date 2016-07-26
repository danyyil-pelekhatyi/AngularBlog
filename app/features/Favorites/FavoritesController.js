(function() {
	angular
		.module("app")
		.controller('FavoritesController',
			['LoginService', 'FavoritesService', FavoritesController])

	function FavoritesController(LoginService, FavoritesService) {
		var vm = this;
		vm.favorites = _getFavorites;
		vm.searchText = "";

		function _getFavorites() {
			return FavoritesService.getFavorites(LoginService.getCurrentUser());
		}
	}
})()