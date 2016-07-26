(function() {
	angular
		.module('app')
		.controller('LoginController', ['LoginService', LoginController])
		
	function LoginController(LoginService) {
		var vm = this;
		vm.register = LoginService.register;
		vm.registerUser;
		vm.loginUser;
		vm.login = function() { LoginService.login(vm.loginUser) };
	}
})()