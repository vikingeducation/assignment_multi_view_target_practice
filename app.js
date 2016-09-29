var targetPractice = angular.module('targetPractice', ['ui.router']);

targetPractice.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("");

  $stateProvider
    .state('parent', {
      url: '/',
      views: {

        '': {
          template: 'Targeting unnamed view from parent state'
        },

        'named-parent': {
          template: 'Targeting named view from parent state'
        },

        'main-header': {
          template: 'Targeting header from parent state'
        }
      }
    });
});

// ADDING ERROR HANDLING
targetPractice.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
