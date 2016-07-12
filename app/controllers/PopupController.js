module.exports = function(PopupService) {
	var vm = this;

	vm.getMessages = _getMessages;

	function _getMessages() {
		return PopupService.getMessages();
	}
}