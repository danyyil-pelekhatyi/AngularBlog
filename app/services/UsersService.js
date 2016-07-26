(function() {
	angular.module('app')
		.service('UsersService',
			['DatabaseService', UsersService])

	function UsersService(DatabaseService) {
		return {
			getUserByUsername: DatabaseService.getUserByUsername
		}
	}
})()