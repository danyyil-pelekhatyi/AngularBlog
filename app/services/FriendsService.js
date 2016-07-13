module.exports = function(LoginService, DatabaseService) {
	return {
		isFriend: _isFriend,
		addFriend: _addFriend,
		removeFriend: _removeFriend,
		gotFriendsRequestsFrom: DatabaseService.gotFriendsRequestsFrom,
		sentFriendRequestTo: DatabaseService.sentFriendRequestTo,
		getUserFriends: DatabaseService.getUserFriends,
		cancelRequest: _cancelRequest,
		declineRequest: _declineRequest,
		acceptRequest: _acceptRequest
	}

	function _cancelRequest(friendRequest) {
		DatabaseService.cancelFriendRequest(LoginService.getCurrentUser(), friendRequest);
	}

	function _declineRequest(friendRequest) {
		DatabaseService.declineFriendRequest(LoginService.getCurrentUser(), friendRequest);
	}

	function _acceptRequest(friendRequest) {
		DatabaseService.acceptFriendRequest(LoginService.getCurrentUser(), friendRequest);
	}

	function _isFriend(username) {
		return LoginService.getCurrentUser().friendsId
			.indexOf(DatabaseService.getUserByUsername(username).id) > -1;
	}

	function _removeFriend(user) {
		var currentUser = LoginService.getCurrentUser();
		DatabaseService.removeFriend(currentUser, user);
	}

	function _addFriend(user) {
		var currentUser = LoginService.getCurrentUser();
		DatabaseService.addFriend(currentUser, user);
	}
}