module.exports = function($log, $location) {
	var _users = [
  		{
  			id: 1,
			username: "Me",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "1",
			articlesId: [ 1, 2, 3, 4, 5, 6],
			friendsId: [ 2, 3, 5 ],
			favoritesId: [ 3, 4, 6 ],
			sentFriendRequestTo: [ 6 ],
			gotFriendsRequestsFrom: [ 4 ]
		},
		{
			id: 2,
			username: "Me2",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "2",
			articlesId: [ 7 ],
			friendsId: [ 1 ],
			favoritesId: [],
			sentFriendRequestTo: [],
			gotFriendsRequestsFrom: []
		},
		{
			id: 3,
			username: "Me3",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "3",
			articlesId: [ 8 ],
			friendsId: [ 1 ],
			favoritesId: [],
			sentFriendRequestTo: [],
			gotFriendsRequestsFrom: []
		},
		{
			id: 4,
			username: "Me4",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "4",
			articlesId: [ 9 ],
			friendsId: [ 1 ],
			favoritesId: [],
			sentFriendRequestTo: [ 1 ],
			gotFriendsRequestsFrom: []
		},
		{
			id: 5,
			username: "Me5",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "5",
			articlesId: [ 10, 11, 12 ],
			friendsId: [ 1 ],
			favoritesId: [],
			sentFriendRequestTo: [],
			gotFriendsRequestsFrom: []
		},
		{
			id: 6,
			username: "Me6",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "6",
			articlesId: [],
			friendsId: [],
			favoritesId: [],
			sentFriendRequestTo: [],
			gotFriendsRequestsFrom: [ 1 ]
		}
	];

	var _articles = [
		{
			userId: 1,
			id: 1,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 5, 15, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 1,
			id: 2,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 5, 14, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 1,
			id: 3,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 5, 12, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 1,
			id: 4,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 5, 16, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 1,
			id: 5,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 4, 15, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 2,
			id: 7,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 3, 11, 30),
			upVotesBy: [ 1 ],
			downVotesBy: [],
			rating: 1
		},
		{
			userId: 3,
			id: 8,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 5, 1, 12, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 4,
			id: 9,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(2016, 4, 30, 11, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 5,
			id: 10,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me5',
			date: new Date(2016, 4, 5, 19, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 5,
			id: 11,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me5',
			date: new Date(2016, 5, 4, 15, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		},
		{
			userId: 5,
			id: 12,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me5',
			date: new Date(2016, 5, 3, 15, 30),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		}
	];

	var _emptyUser = {
		username: "",
		name: "",
		blogname: "",
		password: "",
		articles: []
	};

	var _cash = {
		lastArticle: {
			username: "",
			articles: {}
		},
		userFriends: {
			username: "",
			friends: {}
		},
		userFavorites: {
			username: "",
			favorites: {}
		},
		userRequestsSent: {
			username: "",
			requests: {}
		},
		userRequestsRecieved: {
			username: "",
			requests: {}
		},
		popularArticles: {
			username: "",
			articles: {}
		}
	};

	return {
		getUserByUsername: _getUserByUsername,
		addUser: function(user) { _users.push(user | _emptyUser); },
		validateCredentials: _validateCredentials,
		getArticlesByUsername: _getArticlesByUsername,
		getUserFriends: _getUserFriends,
		addArticle: _addArticle,
		addFriend: _addFriend,
		removeFriend: _removeFriend,
		addFavorite: _addFavorite,
		removeFavorite: _removeFavorite,
		getFavorites: _getFavorites,
		gotFriendsRequestsFrom: _gotFriendsRequestsFrom,
		sentFriendRequestTo: _sentFriendRequestTo,
		cancelFriendRequest: _cancelFriendRequest,
		declineFriendRequest: _declineFriendRequest,
		acceptFriendRequest: _acceptFriendRequest,
		downVoteArticle: _downVoteArticle,
		upVoteArticle: _upVoteArticle,
		getPopularArticles: _getPopularArticles
	};

	function _getUserByUsername(username) {
		var result = _users.find( function(user)
			{ return user.username == username; }
		);
		return result;
	}

	function _validateCredentials(user) {
		var result = _users.find( function(userFromDatabase) {
				return userFromDatabase.username == user.username
				&& userFromDatabase.password == user.password;
			}
		);
		return result;
	}

	function _getArticlesByUsername(username) {
		if (_cash.lastArticle.username !== username) {
			_cash.lastArticle.username = username;
			var userId = _getUserByUsername(username).id;
			_cash.lastArticle.articles = _articles.filter( function(article) {
				return article.userId == userId;
			});
		}
		return _cash.lastArticle.articles;
	}

	function _getUserFriends(username) {
		if (_cash.userFriends.username !== username) {
			_cash.userFriends.username = username;
			var friendsId = _getUserByUsername(username).friendsId;
			_cash.userFriends.friends = _users.filter( function(user) {
				return friendsId.indexOf(user.id) >= 0;
			});
		}
		return _cash.userFriends.friends;
	}

	function _addArticle(user, article) {
		var newArticle = {
			userId: user.id,
			id: _articles.length + 1,
			heading: article.title,
			article: article.article,
			author: user.username,
			date: new Date(Date.now()),
			upVotesBy: [],
			downVotesBy: [],
			rating: 0
		};
		_articles.push(newArticle);
		if (_cash.lastArticle.username == user.username) {
			_cash.lastArticle.username = "";
			//_cash.lastArticle.articles.push(newArticle);
		}
	}

	function _addFriend(user, userToAdd) {
		var userInDatabase = _getUserByUsername(user.username);
		var userToAddInDatabase = _getUserByUsername(userToAdd.username);
		var indexOfSentRequestFromUserToAdd =
				userToAddInDatabase.sentFriendRequestTo.indexOf(userInDatabase.id);
		if (indexOfSentRequestFromUserToAdd > -1) {
			var indexOfRequestOfUserToAdd =
				userInDatabase.gotFriendsRequestsFrom.indexOf(userToAddInDatabase.id);
			if (indexOfRequestOfUserToAdd > -1) {
				userInDatabase.gotFriendsRequestsFrom
					.splice(indexOfRequestOfUserToAdd, 1);
			};
			userToAddInDatabase.sentFriendRequestTo
				.splice(indexOfSentRequestFromUserToAdd, 1);
			userToAddInDatabase.friendsId.push(userInDatabase.id);
			userInDatabase.friendsId.push(userToAddInDatabase.id);
			_cash.userRequestsRecieved.username = "";
			_cash.userFriends.username = "";
		} else {
			userInDatabase.sentFriendRequestTo.push(userToAdd.id);
			userToAddInDatabase.gotFriendsRequestsFrom.push(userInDatabase.id);
			_cash.userRequestsSent.username = "";
		};
	}

	function _removeFriend(currentUser, user) {
		var userInDatabase = _getUserByUsername(user.username);
		var currentUserInDatabase = _getUserByUsername(currentUser.username);
		currentUserInDatabase.friendsId
			.splice(currentUserInDatabase.friendsId.indexOf(userInDatabase.id), 1);
		userInDatabase.friendsId
			.splice(userInDatabase.friendsId.indexOf(currentUserInDatabase.id), 1);
		_cash.userFriends.username = "";
	}
	
	function _addFavorite(user, userToAdd) {
		var userInDatabase = _getUserByUsername(user.username);
		var userToAddInDatabase = _getUserByUsername(userToAdd.username);
		userInDatabase.favoritesId.push(userToAddInDatabase.id);
		_cash.userFavorites.username = "";
		$log.debug("Favorite added: " + user.username);
	}

	function _removeFavorite(currentUser, user) {
		var userInDatabase = _getUserByUsername(user.username);
		var currentUserInDatabase = _getUserByUsername(currentUser.username);
		currentUserInDatabase.favoritesId
			.splice(currentUserInDatabase.favoritesId.indexOf(userInDatabase.id), 1);
		_cash.userFavorites.username = "";
		$log.debug("Favorite removed: " + user.username);
	}

	function _getFavorites(user) {
		if (_cash.userFavorites.username !== user.username) {
			_cash.userFavorites.username = user.username;
			var favoritesId = _getUserByUsername(user.username).favoritesId;
			_cash.userFavorites.favorites = _users.filter( function(u) {
				return favoritesId.indexOf(u.id) >= 0;
			});
		}
		return _cash.userFavorites.favorites;
	}

	function _gotFriendsRequestsFrom(user) {
		var userInDatabase = _getUserByUsername(user.username);
		if (_cash.userRequestsRecieved.username !== userInDatabase.username) {
			_cash.userRequestsRecieved.username = userInDatabase.username;
			var userRequestsRecievedId = userInDatabase.gotFriendsRequestsFrom;
			_cash.userRequestsRecieved.requests = _users.filter( function(u) {
				return userRequestsRecievedId.indexOf(u.id) >= 0;
			});
		}
		//$log.debug("Got friend requests from:");
		//$log.debug(_cash.userRequestsRecieved.requests);
		return _cash.userRequestsRecieved.requests;
	}
	
	function _sentFriendRequestTo(user) {
		var userInDatabase = _getUserByUsername(user.username);
		if (_cash.userRequestsSent.username !== userInDatabase.username) {
			_cash.userRequestsSent.username = userInDatabase.username;
			var userRequestsSentId = userInDatabase.sentFriendRequestTo;
			_cash.userRequestsSent.requests = _users.filter( function(u) {
				return userRequestsSentId.indexOf(u.id) >= 0;
			});
		}
		//$log.debug("Sent friend requests to:");
		//$log.debug(_cash.userRequestsSent.requests);
		return _cash.userRequestsSent.requests;
	}

	function _cancelFriendRequest(user, friendRequest) {
		var userInDatabase = _getUserByUsername(user.username);
		var friendInDatabase = _getUserByUsername(friendRequest.username);
		userInDatabase.sentFriendRequestTo
			.splice(userInDatabase.sentFriendRequestTo.indexOf(friendInDatabase.id), 1);
		_cash.userRequestsSent.username = "";
		friendInDatabase.gotFriendsRequestsFrom
			.splice(friendInDatabase.gotFriendsRequestsFrom.indexOf(userInDatabase.id), 1);
	}

	function _declineFriendRequest(user, friendRequest) {
		var userInDatabase = _getUserByUsername(user.username);
		var friendInDatabase = _getUserByUsername(friendRequest.username);
		friendInDatabase.sentFriendRequestTo
			.splice(friendInDatabase.sentFriendRequestTo.indexOf(userInDatabase.id), 1);
		_cash.userRequestsRecieved.username = "";
		userInDatabase.gotFriendsRequestsFrom
			.splice(userInDatabase.gotFriendsRequestsFrom.indexOf(friendInDatabase.id), 1);
	}

	function _acceptFriendRequest(user, friendRequest) {
		_addFriend(user, friendRequest);
	}

	function _downVoteArticle(user, article) {
		var articleInDatabase = _articles.find(function(a) { return a.id == article.id });
		var userInDatabase = _getUserByUsername(user.username);
		var indexOfUpVote = articleInDatabase.upVotesBy.indexOf(userInDatabase.id);
		var indexOfDownVote = articleInDatabase.downVotesBy.indexOf(userInDatabase.id);
		if (indexOfUpVote > -1) {
			articleInDatabase.upVotesBy.splice(indexOfUpVote, 1);
		};
		if (indexOfDownVote == -1) {
			articleInDatabase.downVotesBy.push(userInDatabase.id);
		} else {
			articleInDatabase.downVotesBy.splice(indexOfDownVote, 1);
		};
		articleInDatabase.rating =
			articleInDatabase.upVotesBy.length - articleInDatabase.downVotesBy.length;
		_cash.lastArticle.username = "";
		_cash.popularArticles.username = "";
	}

	function _upVoteArticle(user, article) {
		var articleInDatabase = _articles.find(function(a) { return a.id == article.id });
		var userInDatabase = _getUserByUsername(user.username);
		var indexOfUpVote = articleInDatabase.upVotesBy.indexOf(userInDatabase.id);
		var indexOfDownVote = articleInDatabase.downVotesBy.indexOf(userInDatabase.id);
		if (indexOfDownVote > -1) {
			articleInDatabase.downVotesBy.splice(indexOfDownVote, 1);
		};
		if (indexOfUpVote == -1) {
			articleInDatabase.upVotesBy.push(userInDatabase.id);
		} else {
			articleInDatabase.upVotesBy.splice(indexOfUpVote, 1);
		};
		articleInDatabase.rating =
			articleInDatabase.upVotesBy.length - articleInDatabase.downVotesBy.length;
		_cash.lastArticle.username = "";
		_cash.popularArticles.username = "";
	}

	function _getPopularArticles(numberOfArticles) {
		if (_cash.popularArticles.username !== "username") {
			_cash.popularArticles.username = "username";
			_cash.popularArticles.articles = _articles.sort( function(a, b) {
				return b.rating - a.rating;
			}).slice(0, numberOfArticles);
		}
		return _cash.popularArticles.articles;
	}
}