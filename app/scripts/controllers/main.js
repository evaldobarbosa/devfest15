'use strict';

/**
 * @ngdoc function
 * @name listApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listApp
 */
angular.module('listApp')
  .controller('MainCtrl', function ($scope, TodoService, TodoFactory) {
  	$scope.list = [];
  	$scope.atual = {};

  	$scope.refresh = function() {
  		$scope.list = TodoService.get();
  	}

    $scope.append = function(task) {
    	try {
	    	TodoService.add(task);

	    	$scope.refresh();
	    } catch (e) {
	    	alert(e);
	    }
    }

    $scope.remove = function(task) {
    	TodoService.del(task);

    	$scope.refresh();
    }

    $scope.selecionar = function(task) {
    	task.selecionada = true;

    	$scope.atual = task;

    	console.log($scope.atual);
    }

    $scope.refresh();
    $scope.atual = $scope.list[0];
  });