var app = angular.module('TargetPractice', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("");

  $stateProvider
    .state('parent', {
      url: '/',
      views: {
        "": {
          template: 'Targeting unnamed view from parent state'
        },
        "named-parent": {
          template: 'Targeting named view from parent state'
        },
        "main-header": {
          template: 'Targeting header from parent state'
        }
      }
    })




});

// debugging
app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});