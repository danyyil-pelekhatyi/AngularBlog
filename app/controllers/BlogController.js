module.exports = function(DatabaseService, $routeParams, $log) {
	var vm = this;
	//$log.debug($routeParams);
	vm.blogAuthor = DatabaseService.getUserByUsername($routeParams.username);
	//$log.debug(vm.blogAuthor);
	vm.getArticlesByUsername = DatabaseService.getArticlesByUsername;
}