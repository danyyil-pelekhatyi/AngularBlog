module.exports = function($log) {
	var _users = [
  		{
  			id: 1,
			username: "Me",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "1",
			articlesId: [ 1, 2, 3, 4, 5, 6],
			friendsId: [ 2, 3, 4, 5 ]
		},
		{
			id: 2,
			username: "Me2",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "2",
			articlesId: [ 7 ],
			friendsId: [ 1 ]
		},
		{
			id: 3,
			username: "Me3",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "3",
			articlesId: [ 8 ],
			friendsId: [ 1 ]
		},
		{
			id: 4,
			username: "Me4",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "4",
			articlesId: [ 9 ],
			friendsId: [ 1 ]
		},
		{
			id: 5,
			username: "Me5",
			name: "Daniel",
			blogname: "Lorem ipsum blog",
			password: "5",
			articlesId: [ 10, 11, 12 ],
			friendsId: [ 1 ]
		}
	];

	var _articles = [
		{
			userId: 1,
			id: 1,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 1,
			id: 2,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 1,
			id: 3,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 1,
			id: 4,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 1,
			id: 5,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 2,
			id: 7,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 3,
			id: 8,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 4,
			id: 9,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 5,
			id: 10,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me5',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 5,
			id: 11,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me5',
			date: new Date(Date.now()),
			upVotes: 0
		},
		{
			userId: 5,
			id: 12,
			heading: "Hello, |Bitches!",
			article: "Lorem ipsum",
			author: 'Me5',
			date: new Date(Date.now()),
			upVotes: 0
		}
	];

	var _emptyUser = {
		username: "",
		name: "",
		blogname: "",
		password: "",
		articles: []
	};

	var _getUserByUsername = function(username) {
		var result = _users.find( function(user)
			{ return user.username == username; }
		);
		return result;
	};

	var _cash = {
		lastArticle: {
			username: "",
			articles: {}
		},
		userFriends: {
			username: "",
			friends: {}
		}
	};

	var service = {
		getUserByUsername: _getUserByUsername,

		addUser: function(user) {
			_users.push(user | _emptyUser);
		},

		validateCredentials: function(user) {
			var result = _users.find( function(userFromDatabase) {
					return userFromDatabase.username == user.username
					&& userFromDatabase.password == user.password;
				}
			);
			return result;
		},

		getArticlesByUsername: function(username) {
			if (_cash.lastArticle.username !== username) {
				_cash.lastArticle.username = username;
				var userId = _getUserByUsername(username).id;
				_cash.lastArticle.articles = _articles.filter( function(article) {
					return article.userId == userId;
				});
			}
			return _cash.lastArticle.articles;
		},
		
		getUserFriends: function(username) {
			if (_cash.userFriends.username !== username) {
				_cash.userFriends.username = username;
				var friendsId = _getUserByUsername(username).friendsId;
				_cash.userFriends.friends = _users.filter( function(user) {
					return friendsId.indexOf(user.id) >= 0;
				});
			}
			return _cash.userFriends.friends;
		},

		addArticle: function(user, article) {
			_articles.push({
				userId: user.id,
				id: _articles.length + 1,
				heading: article.title,
				article: article.text,
				author: user.username,
				date: new Date(Date.now()),
				upVotes: 0
			});
		}
	};

	return service;
}