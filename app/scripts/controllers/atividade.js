'use strict';

/**
 * @ngdoc function
 * @name listApp.controller:AtividadeCtrl
 * @description
 * # AtividadeCtrl
 * Controller of the listApp
 */
angular.module('listApp')
  .controller('AtividadeCtrl', function ($scope,$routeParams,TodoService,TodoFactory) {
    $scope.atual = ( $routeParams.id !== undefined && $routeParams.id > 0 ) 
    	? TodoService.get($routeParams.id)
    	: TodoFactory.getNew();
  });
