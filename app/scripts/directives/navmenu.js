'use strict';

/**
 * @ngdoc directive
 * @name newGuitarV2App.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('newGuitarV2App')
  .directive('navMenu', function () {
    return {
      templateUrl:'templates/navMenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.siteLinks = [

        		
        		{'name':'Visual Frets','web':'#/frets','img':''},
        		{'name':'Harmonics','web':'#/harm','img':''}

        ]
      }
    };
  });
