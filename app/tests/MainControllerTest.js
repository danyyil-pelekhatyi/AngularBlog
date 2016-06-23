"use strict";
require('../controllers/MainController')
describe("App", function () {
	beforeEach(angular.module('app'));

	describe("MainController", function () {
		var $controller,
			$scope;

		beforeEach(inject(function(_$controller_, $rootScope){
			var $scope = $rootScope.$new();;
			$controller = _$controller_('MainController', { $scope: $scope });
		}));

		it("has the correct message", function () {
			var message = 'Two birds killed with one stone!';
			expect($scope.message).toBe(message);
		});
	});
});