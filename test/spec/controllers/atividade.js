'use strict';

describe('Controller: AtividadeCtrl', function () {

  // load the controller's module
  beforeEach(module('listApp'));

  var AtividadeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AtividadeCtrl = $controller('AtividadeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AtividadeCtrl.awesomeThings.length).toBe(3);
  });
});
