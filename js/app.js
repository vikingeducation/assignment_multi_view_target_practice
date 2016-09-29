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
    });

});
