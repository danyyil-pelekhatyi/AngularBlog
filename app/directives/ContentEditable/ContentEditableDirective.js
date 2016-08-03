(function() {
	angular
		.module("app")
		.directive('contenteditable', [ContentEditableDirective])

	function ContentEditableDirective($compile) {
		return {
			restrict: 'A',
			require: "?ngModel",
			link: function (scope, element, attrs, ngModel) {
				if (!ngModel) return; // do nothing if no ng-model

			    ngModel.$render = function() {
			    	element.html(ngModel.$viewValue || '');
			    };

			    element.on('blur keyup change', function() {
			    	scope.$evalAsync(read);
			    });
			    read();

		    	function read() {
				    var html = element.html();
				    if ( attrs.stripBr && html == '<br>' ) {
				    	html = '';
				    }

				    ngModel.$setViewValue(html);
			    }
			}
		}
	}
})()