describe("MainController", function () {
	var $controller,
		$scope;

	beforeEach(function(){
		angular.mock.module('app');

		inject(function(_$controller_, $rootScope){
			$scope = $rootScope.$new();
			$controller = _$controller_('MainController', { $scope: $scope });
		})
	});

	it("has the correct message", function () {
		var message = 'Two birds killed with one stone!';
		expect($scope.message).toBe(message);
	});
});
