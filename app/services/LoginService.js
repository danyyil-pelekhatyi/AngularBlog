module.exports = function(DatabaseService, $location, $log) {
	var _currentUser;
	var service = {
		login: function(user) {
			var user = DatabaseService.validateCredentials(user);
			if(user) {
				_currentUser = user;
				$log.debug(user.username + ' logged in');
				$location.path('/');
			}
		},

		logout: function() {
			_currentUser = null;
			$location.path('/login');
		},

		register: function(user) {
			DatabaseService.addUser(user);
		},

		getCurrentUser: function() {
			return _currentUser;
		},

		isLoggedIn: function() {
			return _currentUser !== undefined;
		}
	}

	return service;
}