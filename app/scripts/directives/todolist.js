'use strict';

/**
 * @ngdoc directive
 * @name listApp.directive:TodoList
 * @description
 * # TodoList
 */
angular.module('listApp')
  .directive('todoList', function () {
    return {
      templateUrl: 'views/todolistview.html',
      restrict: 'E',
      scope: {
      	atividade: '='
      },
      controller: function($scope) {
      	$scope.nova = function() {
      		$scope.atual = {titulo: 'sua nova tarefa', feito: false};
      	}

      	$scope.nova();

      	$scope.append = function(t) {
      		if ( t.titulo == '' ) {
      			alert('Informe o título');
      			return;
      		}

      		$scope.atividade.tarefas.push(t);

      		$scope.nova();
      	}
      }
    };
  });
