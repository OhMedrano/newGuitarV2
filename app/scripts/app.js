'use strict';

/**
 * @ngdoc overview
 * @name newGuitarV2App
 * @description
 * # newGuitarV2App
 *
 * Main module of the application.
 */
angular
  .module('newGuitarV2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frets.html',
        controller: 'FretsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/frets', {
        templateUrl: 'views/frets.html',
        controller: 'FretsCtrl'
      })
      .when('/harm', {
        templateUrl: 'views/harm.html',
        controller: 'HarmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
