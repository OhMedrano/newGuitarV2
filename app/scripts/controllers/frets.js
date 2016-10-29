'use strict';

/**
 * @ngdoc function
 * @name newGuitarV2App.controller:FretsCtrl
 * @description
 * # FretsCtrl
 * Controller of the newGuitarV2App
 */


angular.module('newGuitarV2App')
  .controller('FretsCtrl', function ($scope) {
   	$scope.fretboard = ['images/fretboard/fretboard.png',
   						'images/fretboard/leftFretboard.png',
   						'images/fretboard/mobileFretboard.png'
  					 ];

  });
