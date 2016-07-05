module.exports = function(DatabaseService, LoginService, $routeParams) {
	var vm = this;
	
	vm.newArticle = {
		title: "",
		article: ""
	};
	vm.onSumbit = function() {
		DatabaseService.addArticle(LoginService.getCurrentUser(), vm.newArticle);
	};
}