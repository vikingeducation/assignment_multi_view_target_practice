var app = angular.module('TargetPractice', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("");

  $stateProvider
    .state('products', {
      url: "/",
    })


});

// debugging
app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});