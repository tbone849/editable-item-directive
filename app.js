angular.module('myApp', ['ngAnimate'])
	.directive('makeEditable', function(){
		return {
			restrict: 'A',
			scope: true,
			transclude: true,
			templateUrl: 'editable.html',
			link: function(scope, element, attrs){
				scope.editOrSave = 'Edit';
			}
		}

	});