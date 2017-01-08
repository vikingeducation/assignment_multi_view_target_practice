var TargetPractice = angular.module('TargetPractice', ['ui.router']);


// inject the services provided by ui-router
TargetPractice.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('parent', {
        url: '/',
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
        }
      }).state('parent.child', {
        url: 'child',
        views: {
          '@': {
            templateUrl: 'js/templates/child.html',
          },
          '@parent.child': {
            template: 'Targeting unnamed child view from child state',
          },
          'named-child@parent.child': {
            template: 'Targeting named child view from child state',
          },
          //Why not 'named-parent@parent' ?
          'named-parent@': {
            template: 'Targeting named parent view from child state',
          },
          'main-header@': {
            template: 'Targeting header from child state',
          }
        }
      });

  }]);

TargetPractice.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});