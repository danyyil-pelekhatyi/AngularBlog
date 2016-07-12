module.exports = function(DatabaseService, PopupService, $location, $log) {
	var service = {
		login: _login,
		logout: _logout,
		register: _register,
		getCurrentUser: function() { return _currentUser; },
		isLoggedIn: function() { return _currentUser !== undefined;	},
		onTheUsersPage: _onTheUsersPage
	}

	var _currentUser = (function() {
		var cookieUsername = getCookie("username");
		return cookieUsername.length > 0 ?
			DatabaseService.getUserByUsername(cookieUsername) : undefined;
	})();

	return service;

	function _register(user) {
		if (DatabaseService.addUser(user))  
			PopupService.showMessage("Registered new user");
		else
			PopupService.showError("Registration failed");
	}

	function _login(user) {
		var user = DatabaseService.validateCredentials(user);
		if(user) {
			writeCookie("username", user.username);
			_currentUser = user;
			PopupService.showMessage("Logged in as a " + user.username);
			$location.path('/');
		} else {
			PopupService.showError("Unable to log in - verify your credentials and try again");
		}
	}

	function _logout() {
		writeCookie("username","");
		_currentUser = null;
		$location.path('/login');
		PopupService.showMessage("Logged out");
	}

	function getCookie(cname) {
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

	function writeCookie(cname, cvalue) {document.cookie = cname + "=" + cvalue;}

	function _onTheUsersPage() {
		var usersPage = "/blogs/" + _currentUser.username;
		return $location.url() == usersPage || $location.url().startsWith(usersPage + "/");
	}
}