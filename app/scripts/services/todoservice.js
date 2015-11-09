'use strict';

/**
 * @ngdoc service
 * @name listApp.TodoService
 * @description
 * # TodoService
 * Service in the listApp.
 */
Array.prototype.indexOfObject = function(obj) {
    for (var i = 0, len = this.length; i < len; i++) {
        if ( JSON.stringify(this[i]) === JSON.stringify(obj) ) {
            return i;
        }
    }
    return -1;
}

angular.module('listApp')
  .service('TodoService', function ($filter) {
  	var sequence = 2;

    var todoList = [
    	{
    		id : 1,
    		atividade: 'Devfest 2015',
    		tarefas: [
    			{titulo: 'Preparar slides', feito: true},
    			{titulo: 'Preparar app', feito: true},
    			{titulo: 'Apresentar', feito: false}
    		]
    	}
    ];

    return {
    	get: function() {
    		return todoList;
    	},
    	add: function(task) {
    		if ( task.id == 0 ) {
	    		var x = $filter('filter')(todoList,task.atividade);

	    		if ( x.length > 0 ) {
	    			throw "Atividade já cadastrada"
	    		}

	    		task.id = sequence;

	    		todoList.push(task);

	    		sequence++;
	    	} else {
	    		throw "Atividade já cadastrada";
	    	}
    	},
    	del: function(task) {
    		var x = todoList.indexOfObject(task);

    		if ( x == -1 ) {
    			throw "Atividade não encontrada";
    		}

    		todoList.splice(x,1);
    	},
    	addTask: function(task,title) {
    		var x = todoList.indexOfObject(task);

    		if ( x == -1 ) {
    			throw "Atividade não encontrada";
    		}

    		todoList[x].tasks.push(task);
    	}
    }
  });
