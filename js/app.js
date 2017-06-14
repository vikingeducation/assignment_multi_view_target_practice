var TargetPractice = angular.module("TargetPractice", ['ui.router']);

TargetPractice.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider.state("parent", {
    url: "/",
    views: {
      "": {
        template: "Targeting unnamed view from parent state!"
      },
      "named-parent": {
        template: "Targeting named view from parent state."
      },
      "main-header": {
        template: "Targeting header from parent state..."
      }
    }
  }).state("parent.child", {
    url: "child",
    views: {
      "@": {
        templateUrl: "js/templates/child.html"
      },
      "@parent.child": {
        template: "Targeting unnamed child view from child state!"
      },
      "named-child@parent.child": {
        template: "Targeting named child view from child state!!"
      },
      "named-parent@": {
        template: "Targeting named parent view from child state."
      },
      "main-header@": {
        template: "Targeting header from child state..."
      }
    }
  }).state("parent.child.grandchild", {
    url: "/grandchild",
    views: {
      "@parent.child": {
        templateUrl: "js/templates/grandchild.html"
      },
      "@parent.child.grandchild": {
        template: "Targeting unnamed grandchild view from grandchild state!"
      },
      "named-grandchild@parent.child.grandchild": {
        template: "Targeting named grandchild view from grandchild state!!"
      },
      "named-child@parent.child": {
        template: "Targeting named child view from grandchild state."
      },
      "named-parent@": {
        template: "Targeting named parent view from grandchild state."
      },
      "main-header@": {
        template: "Targeting header from grandchild state..."
      }
    }
  });
});

// This is for error handling!
// It sets an event listener on the root scope & it outputs whatever loggable errors are happening when an error in ui-router states occurs
store.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});