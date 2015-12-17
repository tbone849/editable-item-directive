describe('makeEditable', function(){
	var scope;
	var element;
	var compiled;
	var html;
	var elementScope;

	beforeEach(module('myApp'));
	beforeEach(module('editable.html'));

	beforeEach(inject(function($rootScope, $compile){

		html = '';
		html += '<div class="container" make-editable>';
		html += '<p>Content that will become editable when rendered.</p>';
		html += '</div>';		

		scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
	}));

	it('should render the element correctly', function(){
		expect(element.find('p').text()).toContain('rendered');
	});

	it('should expose a controller to toggle the editable region', function(){
		elementScope = element.scope();
		expect(angular.isFunction(elementScope.toggleEditableRegion)).toBe(true);
		
		// default state
		expect(elementScope.editOrSave).toBe('Edit');
		expect(elementScope.edit).toBe(false);
		expect(element.find('p').parent().attr('contenteditable')).toBe('false');
		
		// click edit button
		elementScope.toggleEditableRegion();
		scope.$digest();
		expect(elementScope.editOrSave).toBe('Save');
		expect(elementScope.edit).toBe(true);
		expect(element.find('p').parent().attr('contenteditable')).toBe('true');
		
		// click save button
		elementScope.toggleEditableRegion();
		scope.$digest();
		expect(elementScope.editOrSave).toBe('Edit');
		expect(elementScope.edit).toBe(false);
		expect(element.find('p').parent().attr('contenteditable')).toBe('false');
	});

});