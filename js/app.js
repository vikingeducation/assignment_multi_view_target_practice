var app = angular.module('ourApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('parent', {
      url: '/',
      views: {
        '': {
          template: 'Targeting an unnamed view from the parent.'
        },
        'named-parent': {
          template: 'Targeting named view from parent state.'
        },
        'main-header': {
          template: 'Targeting header from parent state.'
        }
      }
    })
    .state('parent.child', {
      url: '/child',
      views:  {
        '@': {
          templateUrl: 'js/templates/child.html'
        },
        '@parent.child': {
          template: 'targeting an un-named child view from child state'
        },
        'named-child@parent.child': {
          template: 'targeting named child view from child state'
        },
        'named-parent@': {
          template: 'targeting named parent view from child state'
        },
        'main-header@': {
          template: 'targeting header from child state'
        }
      }
    });

});
