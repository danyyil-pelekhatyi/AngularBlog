module.exports = function($interval) {
	var service = {
		getMessages: _getMessages,
		showError: _showError,
		showMessage: _showMessage
	};

	var showMessageFor = 5000;
	var messageTypes = {
		message: "message",
		error: "error"
	};
	var messages = [];

	return service;

	function _getMessages() {
		return messages;
	}

	function _showMessage(message) {
		var msg = {
			text: message,
			type: messageTypes.message,
			id: "msg-" + Date.now()
		};
		_showPopup(msg);
	}

	function _showError(message) {
		var msg = {
			text: message,
			type: messageTypes.error,
			id: "msg-" + Date.now()
		};
		_showPopup(msg);
	}

	function _showPopup(msg) {
		messages.push(msg);
		window.setTimeout(function() {
			var msgElement = document.getElementById(msg.id);
			_fade(msgElement, function() {
				messages.splice(messages.indexOf(msg), 1);
			});
		}, showMessageFor);
	}

	function _fade(element, callback) {
	    var op = 1;
	    var promise = $interval(function () {
	        if (op <= 0.1){
	            $interval.cancel(promise);
	            element.style.display = 'none';
	            callback();
	        }
	        element.style.opacity = op;
	        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op -= op * 0.1;
	    }, 75);
}
}