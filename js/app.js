TargetPractice = angular.module('TargetPractice', ["ui.router"]);

TargetPractice.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('parent', {
      url: '/',
      views: {
        "": {
          template: '<h2>Targeting unnamed view from parent state</h2>'
        },
        "named-parent": {
          template: '<h2>Targeting named view from parent state</h2>'
        },
        "main-header": {
          template: '<h2>Targeting header from parent state</h2>'
        }
      }
    })
    .state('parent.child', {
      url: 'child',
      views: {
        "@": {
          templateUrl: 'js/templates/child.html'
        },
        "@parent.child": {
          template: "<h3>Targeting unnamed child view from child state</h3>"
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
    })
    .state('parent.child.grandchild', {
      url: '/grandchild',
      views: {
        "@parent.child": {
          templateUrl: 'js/templates/grandchild.html'
        },
        "@parent.child.grandchild": {
          template: '<h4>Targeting unnamed grandchild view from grandchild state</h4>'
        },
        "named-grandchild@parent.child.grandchild": {
          template: '<h4>Targeting named grandchild view from grandchild state</h4>'
        },
        "named-child@parent.child": {
          template: '<h4>Targeting named child view from grandchild state</h4>'
        },
        "named-parent@": {
          template: '<h4>Targeting named parent view from grandchild state</h4>'
        },
        "main-header@": {
          template: '<h4>Targeting header from grandchild state</h4>'
        }
      }
    })
});
