module.exports = function(DatabaseService, $routeParams) {
	var vm = this;

	vm.newArticle = {
		title: "Title",
		article: "Text"
	};
	vm.onSumbit = function() {
		DatabaseService.addArticle(main.getCurrentUser(), vm.newArticle);
		$routeParams.reload();
	}
}