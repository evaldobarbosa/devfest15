'use strict';

/**
 * @ngdoc service
 * @name listApp.TodoFactory
 * @description
 * # TodoFactory
 * Factory in the listApp.
 */
angular.module('listApp')
  .factory('TodoFactory', function () {
    var counter = 0;

    return {
      getNew: function () {
        counter++;
        
        return {
          id: 0,
          atividade: 'sua nova atividade ' + counter,
          tarefas: []
        };
      }
    };
  });
