var app = angular.module('TargetPractice', ['ui.router']);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('parent', {
      url: '/',
      views: {
        "@": {
          template: "Targeting unnamed view from parent state"
        },
        "named-parent@": {
          template: 'Targeting named view from parent state'
        },

        "main-header@": {
          template: 'Targeting header from parent state'
        }
      },
    })
    .state('parent.child', {
      url:"/child",
      views: {
        "@" : {
          templateUrl: "templates/child.html"
        },

        "@parent.child" : {
          template: "Targeting unnamed child view from child state"
        },
        //Or route is child?
        "named-child@parent.child" : { 
          template: "Targeting named child view from child state"
        },
        "named-parent@" :{
          template: "Targeting named parent view from child state"
        },
        "main-header@" : {
          template: "Targeting header from child state"
        }
      }
    })
    .state("parent.child.grandchild", {
      url: "/grandchild",
      views : {
        "@parent.child" :{
          templateUrl: "templates/grandchild.html"
        },

        "named-grandchild@parent.child.grandchild": {
          template: '1 Targeting named grandchild view from grandchild state'
        },

        "@parent.child.grandchild" : {
          template: "2 Targeting unnamed grandchild view from grandchild state"
        },

        "main-header@" : {
          template: "3 Targeting header from grandchild state"
        },

        "named-parent@" : {
          template: "4 Targeting named parent from grandchild state"
        },

        "named-child@parent.child" : {
          template: "5 Target named child from grandchild state"
        }

        // "" : {
        //   template: ""
        // }
      }
    })
})