var targetPractice = angular.module('targetPractice', ['ui.router'])

targetPractice.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('parent', {
                    url: '/',
                    views:{
                      "":{
                        template: "targeting unnamed view from parent"
                      },
                      "namedParent": {
                        template: "targeting named view from parent"
                      },
                      "mainHeader": {
                        template: "<code>Parent</code> state"
                      }
                    }
                  })
                  .state('child', {
                    parent: 'parent',
                    url: 'child',
                    views:{
                      '@': {
                        templateUrl: 'js/views/child.html'
                      },
                      "@child":{
                        template: "targeting unnamed view from child"
                      },
                      "namedChild@child": {
                        template: "targeting named view from child"
                      },
                      "namedParent@":{
                        template: "targeting named parent view from child"
                      },
                      "mainHeader@": {
                        template: "<code>Child</code> state"
                      }
                    }
                  })
                  .state('grandchild', {
                      parent: 'child',
                      url: '/grandchild',
                      views: {
                        '@child': {
                          templateUrl: 'js/views/grandchild.html'
                        },
                        'namedGrandchild@grandchild': {
                          template: 'targeting named view from grandchild state'
                        },
                        '@grandchild': {
                          template: 'targeting unnamed view from grandchild state'
                        },
                        'mainHeader@': {
                          template: '<code>Grandchild</code> state'
                        },
                        "namedParent@": {
                          template: 'targeting named parent view from grandchild state'
                        },
                        "namedChild@child": {
                          template: "targeting named child view from grandchild state"
                        }
                      }
                  })
  }
])
