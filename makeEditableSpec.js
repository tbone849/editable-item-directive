describe('makeEditable', function(){
	var scope;
	var element;
	var compiled;
	var html;

	beforeEach(module('myApp'));
	beforeEach(module('editable.html'));

	beforeEach(inject(function($rootScope, $compile){
		html = '';
		html += '<div class="container" make-editable>';
		html += '<p>Content that will become editable when rendered.</p>';
		html += '</div>';		

		scope = $rootScope.$new();
        compiled = $compile(html)
        element = compiled(scope);
        scope.$digest();
	}));

	it('should render the element correctly', function(){
		expect(element.find('p').text()).toContain('rendered');
		expect(element.find('p').parent().attr('contenteditable')).toBeTruthy();
		expect(element.find('button').text()).toBe('Edit');
	});
});