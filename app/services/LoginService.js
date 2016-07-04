module.exports = function(DatabaseService, $location, $log) {
	var getCookie = function(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length,c.length);
	        }
	    }
	    return "";
	}

	var writeCookie = function(cname, cvalue) {document.cookie = cname + "=" + cvalue;}

	var _currentUser = (function() {
		var cookieUsername = getCookie("username");
		return cookieUsername.length > 0 ?
			DatabaseService.getUserByUsername(cookieUsername) : undefined;
	})();

	var service = {
		login: function(user) {
			var user = DatabaseService.validateCredentials(user);
			if(user) {
				writeCookie("username", user.username);
				_currentUser = user;
				$log.debug(user.username + ' logged in');
				$location.path('/');
			}
		},

		logout: function() {
			writeCookie("username","");
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