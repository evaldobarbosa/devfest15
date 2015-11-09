'use strict';

describe('Directive: TodoList', function () {

  // load the directive's module
  beforeEach(module('listApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-todo-list></-todo-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the TodoList directive');
  }));
});
