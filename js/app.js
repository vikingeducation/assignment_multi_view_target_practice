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
                  .state('parent.child', {
                          url: 'child',
                          views:{
                            '@': {
                              templateUrl: 'js/views/child.html'
                            },
                            "@parent.child":{
                              template: "targeting unnamed view from child"
                            },
                            "namedChild@parent.child": {
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
  }
])
