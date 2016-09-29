var TargetPractice = angular.module("TargetPractice", ['ui.router']);

TargetPractice.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('parent', {
      url: '/',
      views: {
        '': {
          template: 'Targeting unnamed view from parent state'
        },

        'main-header': {
          template: 'Targeting header from parent state'
        },

        'named-parent': {
          template: 'Targeting named view from parent state'
        }

      }
    })

}]);