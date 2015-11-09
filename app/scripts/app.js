'use strict';

/**
 * @ngdoc overview
 * @name listApp
 * @description
 * # listApp
 *
 * Main module of the application.
 */
angular
  .module('listApp', [
    'ngAnimate',
    'ngTouch',
    'ngRoute'
  ]).
  config(function($routeProvider) {
  	$routeProvider
        .when('/atividade/:id', {
            controller: 'Atividade'
        })
        .when('/atividade', {
            controller: 'Atividade'
        })
        .otherwise("/");
  });
