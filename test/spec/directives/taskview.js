'use strict';

describe('Directive: taskView', function () {

  // load the directive's module
  beforeEach(module('listApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task-view></task-view>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the taskView directive');
  }));
});
