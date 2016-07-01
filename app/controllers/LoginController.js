module.exports = function(LoginService) {
	var vm = this;
	vm.register = LoginService.register;
	vm.registerUser;
	vm.loginUser;
	vm.login = function() { LoginService.login(vm.loginUser) };
}