angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.contactInfo', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo.html',
        controller: 'contactInfoCtrl'
      }
    }
  })

  .state('menu.meetTheTeam', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meetTheTeam.html',
        controller: 'meetTheTeamCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.products', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/products.html',
        controller: 'productsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});