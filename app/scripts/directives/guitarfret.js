'use strict';

/**
 * @ngdoc directive
 * @name newGuitarV2App.directive:guitarFret
 * @description
 * # guitarFret
 */
angular.module('newGuitarV2App')
  .directive('guitarFret', function () {
    return {
      templateUrl:'templates/guitarFret.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
