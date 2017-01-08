var TargetPractice = angular.module('TargetPractice', ['ui.router']);


// inject the services provided by ui-router
TargetPractice.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/products');

    $stateProvider
      .state('products', {
        url: '/products',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('products.index', {
        url: '',
        templateUrl: 'javascript/templates/products/index.html',
        controller: 'ProductsIndexCtrl',
      })
      .state('products.show', {
        url: '/:id',
        templateUrl: 'javascript/templates/products/show.html',
        controller: 'ProductsShowCtrl'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'javascript/templates/cart/index.html',
        controller: 'CartIndexCtrl'
      });

  }]);

TargetPractice.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});