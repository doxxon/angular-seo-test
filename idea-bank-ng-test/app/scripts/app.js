(function(angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name ideaBank
 *
 * @description
 * The angular application 'ideaBank'
 */
angular.module('ideaBank', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngTouch',
  'ui.router',
  'ideaBank.services',
  'ideaBank.controllers'
])
  .config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .state('page1', {
          url: '/page1',
          templateUrl: 'views/page.html',
          controller: 'Page1Ctrl'
        })
        .state('page2', {
          url: '/page2',
          templateUrl: 'views/page.html',
          controller: 'Page2Ctrl'
        })
        .state('page3', {
          url: '/page3',
          templateUrl: 'views/page.html',
          controller: 'Page3Ctrl'
        })
        .state('page4', {
          url: '/page4',
          templateUrl: 'views/page.html',
          controller: 'Page4Ctrl'
        })
        .state('page5', {
          url: '/page5',
          templateUrl: 'views/page.html',
          controller: 'Page4Ctrl'
        });
    }
  ]);

})(angular);
