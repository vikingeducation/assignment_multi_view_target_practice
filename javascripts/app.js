var TargetPractice = angular.module("TargetPractice", ['ui.router'])




TargetPractice.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");


  $stateProvider
    .state("parent", {
      url: "/",
      views: {
        "": {
          template: "<p>Targeting unnamed view from parent state</p>"
        },

        "named-parent": {
          template: "<p>Targeting named view from parent state</p>"
        },

        "main-header": {
          template: "<p>Targeting header from parent state</p>"
        }
      }
    })

    .state("parent.child", {
      url: "child",

      views: {
        "@": {
          templateUrl: "javascripts/templates/child.html"
        },

        "@parent.child": {
          template: "<p>Targeting unnamed child view from child state</p>"
        },

        "named-child@parent.child": {
          template: "<p>Targeting named child view from child state</p>"
        },

        "named-parent@": {
          template: "<p>Targeting named parent view from child state</p>"
        },

        "main-header@": {
          template: "<p>Targeting header from child state</p>"
        }
      }
    })

    

});


TargetPractice.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});