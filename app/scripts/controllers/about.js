'use strict';

/**
 * @ngdoc function
 * @name toolApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toolApp
 */
angular.module('toolApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
