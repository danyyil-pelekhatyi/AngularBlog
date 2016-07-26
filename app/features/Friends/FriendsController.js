(function() {
	angular
		.module("app")
		.controller('FriendsController',
			['LoginService', 'FriendsService', '$log', FriendsController])

	function FriendsController(LoginService, FriendsService, $log) {
		var vm = this;
		vm.friends = _getUserFriends;
		vm.searchText = "";
		vm.friendRequestsRecieved = _friendRequestsRecieved;
		vm.friendRequestsSent = _friendRequestsSent;
		vm.anyRequests = _anyRequests;
		vm.onCancelRequestClick = FriendsService.cancelRequest;
		vm.onDeclineRequestClick = FriendsService.declineRequest;
		vm.onAcceptRequestClick = FriendsService.acceptRequest;

		function _friendRequestsRecieved() {
			return FriendsService.gotFriendsRequestsFrom(LoginService.getCurrentUser());
		}
		
		function _friendRequestsSent() {
			return FriendsService.sentFriendRequestTo(LoginService.getCurrentUser());
		}

		function _getUserFriends() {
			return FriendsService.getUserFriends(LoginService.getCurrentUser().username);
		}

		function _anyRequests() {
			return (_friendRequestsRecieved().length > 0) || (_friendRequestsSent().length > 0);
		}
	}
})()