'use strict';
angular.module('piknikoApp', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngAria',
  'ngResource',
  'ngAnimate',
  'ngMaterial',
  'angular-jwt',
  // TODO: load other modules selected during generation
])

.config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('TbluePlatte', {
      '50': 'f2fbfa',
      '100': 'e5f7f5',
      '200': 'd9f3f0',
      '300': 'ccefec',
      '400': 'c0ebe7',
      '500': 'b3e7e2',
      '600': 'a6e3de',
      '700': '9adfd9',
      '800': '8ddbd4',
      '900': '81d8d0',
      'A100': 'a8e4df',
      'A200': '6ed2c9',
      'A400': '5accc1',
      'A700': '47c6ba',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('TbluePlatte', {
        'default': '900' // use shade 200 for default, and keep all other shades the same
      })
      .accentPalette('pink', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      })
      .warnPalette('amber', {
        'default': '500'
      })
})


.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/home.html',
          controller: 'FindPlaceCtrl'
        }
      }
      })
    .state('city', {
      url: '/:city',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/city.html',
          controller: 'FindPlaceCtrl'
        }
      }
    })
    .state('place', {
      url: '/:city/:place',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/place.html',
          controller: 'FindPlaceCtrl'
        }
      }
    })
    // .state('debug', {
    //   url: '/debug',
    //   views: {
    //     'pageContent': {
    //       templateUrl: 'main/templates/debug.html',
    //       controller: 'DebugCtrl'
    //     }
    //   }
    // });
  $urlRouterProvider.otherwise('/');

});
