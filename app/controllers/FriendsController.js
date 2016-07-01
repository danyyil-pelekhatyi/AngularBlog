module.exports = function($scope, DatabaseService) {
	var vm = this;
	vm.friends = DatabaseService.getUserFriends($scope.main.getCurrentUser().username);
}