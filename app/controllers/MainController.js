module.exports = function(ThemeService, LoginService, $location) {
	var vm = this;
	vm.themeMap = ThemeService.getThemeMap();
	vm.isLoggedIn = LoginService.isLoggedIn;
	vm.getCurrentUser = LoginService.getCurrentUser;
	vm.onTheUsersPage = onTheUsersPage;

	function onTheUsersPage() {
		var usersPage = "/#/blogs/" + vm.getCurrentUser;
		return $location.url() == usersPage || $location.url().startsWith(usersPage + "/");
	}
}