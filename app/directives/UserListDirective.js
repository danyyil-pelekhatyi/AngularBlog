module.exports = function ($compile) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'views/directives/userList.html',
		scope: {
			users: "=users",
			searchTerm: "=searchTerm"
		}
	}
}