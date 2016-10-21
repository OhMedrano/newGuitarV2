'use strict';

/**
 * @ngdoc directive
 * @name newGuitarV2App.directive:gString
 * @description
 * # gString
 */
angular.module('newGuitarV2App')
  .directive('gString', function () {
    return {
      templateUrl:'templates/gString.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
