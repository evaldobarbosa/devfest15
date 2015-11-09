'use strict';

/**
 * @ngdoc directive
 * @name listApp.directive:todoItem
 * @description
 * # todoItem
 */
angular.module('listApp')
  .directive('todoItem', function () {
    return {
      templateUrl: 'views/todoitem.html',
      restrict: 'E',
      scope: {
      	tarefa: '='
      },
      controller: function($scope) {
      	$scope.checkAtiv = function(ativ) {
      		ativ.feito = !ativ.feito;
      		console.log('todo item: ', ativ.feito);
      	}
      }
    };
  });
