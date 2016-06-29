module.exports = function(ThemeService, LoginService, $route) {
	var vm = this;
	vm.themeMap = ThemeService.getThemeMap();
	vm.isLoggedIn = LoginService.isLoggedIn;
	vm.getCurrentUser = LoginService.getCurrentUser;
}