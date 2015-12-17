angular.module('myApp', [])
	.directive('makeEditable', function(){
		return {
			restrict: 'EA',
			scope: true,
			transclude: true,
			templateUrl: 'editable.html',
			controller: function($scope, $element, $attrs){
				$scope.editOrSave = 'Edit';
				$scope.edit = false;

				$scope.toggleEditableRegion = function(){
					if($scope.editOrSave === 'Edit'){ 
						$scope.editOrSave = 'Save'
						$scope.edit = true;
					} else if($scope.editOrSave === 'Save') {
						$scope.editOrSave = 'Edit'
						$scope.edit = false;
					}
				}
			}
		}

	});