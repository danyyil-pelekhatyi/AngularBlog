module.exports = function(ArticlesService, LoginService, $routeParams) {
	var vm = this;
	
	vm.newArticle = {
		title: "",
		article: ""
	};
	vm.onSumbit = function() {
		ArticlesService.addArticle(LoginService.getCurrentUser(), vm.newArticle);
		vm.newArticle = {
			title: "",
			article: ""
		}
	};
}