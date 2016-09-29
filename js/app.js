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
    })
    .state('parent.child.grandchild', {
      url: '/grandchild',
      views: {
        '@parent.child': {
          templateUrl: 'js/templates/grandchild.html'
        },
        '@parent.child.grandchild': {
          template: 'Targeting unnamed grandchild view from grandchild state'
        },
        'named-grandchild@parent.child.grandchild': {
          template: 'Targeting named grandchild view from grandchild state'
        },
        'named-child@parent.child': {
          template: 'Targeting named child view from grandchild state'
        },
        'named-parent@':{
          template: 'Targeting named parent view from grandchild state'
        },
        'main-header@':{
          template: 'Targeting header from grandchild state'
        }
      }
    })

});
