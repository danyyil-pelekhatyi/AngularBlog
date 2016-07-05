module.exports = function(LoginService, DatabaseService) {
	var vm = this;
	vm.friends = DatabaseService.getUserFriends(LoginService.getCurrentUser().username);
	vm.searchText = "";
}