'use strict';


angular
  .module('toolApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
	'ui.sortable',
    'ngSanitize',
    'ngTouch',
	'LocalStorageModule'
  ])
   .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

