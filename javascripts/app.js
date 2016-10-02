var TargetPractice = angular.module("TargetPractice", ['ui.router'])




TargetPractice.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");


  $stateProvider.state("parent", {
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
  });

    

});


TargetPractice.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});