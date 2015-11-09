'use strict';

/**
 * @ngdoc directive
 * @name listApp.directive:taskView
 * @description
 * # taskView
 */
angular.module('listApp')
  .directive('taskView', function () {
    return {
      templateUrl: 'views/taskview.html',
      restrict: 'E',
      scope: {
      	source: '=',
      	appendCallback: '&',
      	selectCallback: '&'
      },
      controller: function($scope,TodoFactory) {
      	$scope.nova = TodoFactory.getNew();

      	$scope.newTask = function(t) {
      		$scope.appendCallback({task: t});

      		$scope.nova = TodoFactory.getNew();      		
      	}
      }
    };
  });
