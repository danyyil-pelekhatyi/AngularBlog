module.exports = function(DatabaseService, LoginService, $routeParams, $log) {
	var vm = this;
	//$log.debug($routeParams);
	vm.blogAuthor = DatabaseService.getUserByUsername($routeParams.username);
	//$log.debug(vm.blogAuthor);
	vm.getArticlesByUsername = DatabaseService.getArticlesByUsername;
	vm.onTheUsersPage = LoginService.onTheUsersPage;
}