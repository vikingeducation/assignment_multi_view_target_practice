var TargetPractice = angular.module('TargetPractice', ['ui.router']);

TargetPractice.config(
	['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('parent', {
				url: '/',
				views: {
					'': {
						template: 'Targeting unnamed view from parent state'
					},
					"named-parent": {
						template: 'Target named parent view from parent state'
					},
					'main-header': {
						template: 'Targeting header from parent state'
					}
				}
			})
			.state('parent.child', {
				url: 'child',
				views: {
					'@': {
						templateUrl: 'templates/child.html'
					},
					'@parent.child': {
						template: 'Targeting unnamed view child from child state'
					},
					'name-child@parent.child': {
						template: 'Targeting named child from child state'
					},
					'named-parent@': {
						template: 'Targeting named parent view from child state'
					},
					'main-header@': {
						template: 'Targeting main header from child state'
					}
				}
			})

}])


TargetPractice.run(function($rootScope) {
	$rootScope.$on('$stateChangeError', console.log.bind(console))
})