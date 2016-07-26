(function() {
	angular
		.module("app")
		.controller('PopupController', ['PopupService', PopupController])

	function PopupController(PopupService) {
		var vm = this;

		vm.getMessages = _getMessages;

		function _getMessages() {
			return PopupService.getMessages();
		}
	}
})()