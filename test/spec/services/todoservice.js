'use strict';

describe('Service: TodoService', function () {

  // load the service's module
  beforeEach(module('listApp'));

  // instantiate service
  var TodoService;
  beforeEach(inject(function (_TodoService_) {
    TodoService = _TodoService_;
  }));

  it('should do something', function () {
    expect(!!TodoService).toBe(true);
  });

});
