var myApp = angular.module("TargetPractice", ["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('parent', {
    url: "/",
    views: {
      '@': {
        template: 'Targeting unnamed view from parent state',
      },
      'named-parent@': {
        template: 'Targeting named view from parent state',
      },
      'main-header@': {
        template: 'Targeting header from parent state',
      },
    },

  });

  $stateProvider.state('parent.child', {
    url: "child",
    views: {
      '@': {
        templateUrl: '/child.html',
      },
      '@parent.child': {
        template: 'Targeting unnamed child view from child state'
      },
      'named-child@parent.child': {
        template: 'Targeting named child view from child state'
      },
      'named-parent@': {
        template: 'Targeting named parent view from child state'
      },
      'main-header@': {
        template: 'Targeting header from child state'
      }
    },

  });

  $stateProvider.state('parent.child.grandchild', {
    url: "/grandchild",
    views: {
      '@parent.child': {
        templateUrl: "/grandchild.html"
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
      'named-parent@': {
        template: 'Targeting named parent view from grandchild state'
      },
      'main-header@': {
        template: 'Targeting header from grandchild state'
      }
    },
  });
});
