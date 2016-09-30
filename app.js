var TargetPractice = angular.module("TargetPractice", ["ui.router"])

TargetPractice.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider.state('parent', {
    url: '/',
    views: {
      "": {
        template: '<h3>Targeting unnamed view from parent state</h3>'
      },
      "named-parent": {
        template: '<h3>Targeting named parent view from parent state</h3>'
      },
      'main-header': {
        template: '<h3>Targeting header from parent</h3>'
      }
    }
  }).state('parent.child', {
    url: 'child',
    views: {
      "@": {
        templateUrl: 'templates/child.html'
      },
      "@parent.child": {
        template: "<h3>Targeting unnamed child view from child state"
      },
      "named-child@parent.child": {
        template: '<h3>Targeting named child view from child state</h3>'
      },
      "named-parent@": {
        template: '<h3>Targeting named parent view from child state</h3>'
      },
      "main-header@": {
        template: '<h3>Targeting header from child state</h3>'
      }
    }
  }).state('parent.child.grandchild', {
    url: '/grandchild',
    views: {
      "@parent.child": {
        templateUrl: 'templates/grandchild.html'
      },
      "@parent.child.grandchild": {
        template: "<h3>Targeting unnamed child view from grandchild state"
      },
      "named-grandchild@parent.child.grandchild": {
        template: '<h3>Targeting named grandchild view from grandchild state</h3>'
      },
      "named-child@parent.child": {
        template: '<h3>Targeting named child view from grandchild state</h3>'
      },
      "named-parent@": {
        template: '<h3>Targeting named parent view from grandchild state</h3>'
      },
      "main-header@": {
        template: '<h3>Targeting header from grandchild state</h3>'
      }
    }
  })

});
