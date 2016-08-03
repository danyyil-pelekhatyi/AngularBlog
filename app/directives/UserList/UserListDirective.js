(function() {
	angular
		.module("app")
		.directive('userList', UserListDirective)

	function UserListDirective($compile) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'views/directives/UserList/UserList.html',
			scope: {
				users: "=users",
				searchTerm: "=searchTerm"
			}
		}
	}
})()