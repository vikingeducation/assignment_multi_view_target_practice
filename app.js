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
					'named-child@parent.child': {
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
			.state('parent.child.grandchild', {
				url: 'grandchild',
				views: {
					'@parent.child': {
						templateUrl: 'templates/grandchild.html'
					},
					'@parent.child.grandchild': {
						template: 'Targeting unnamed grandchild view from grandchild state'
					},
					'named-grandchild@parent.child.grandchild': {
						template: 'Targeting named grandchild from grandchild state'
					},
					'named-child@parent.child': {
						template: 'Targeting named child from grandchild state'
					},
					'named-parent@': {
						template: 'Targeting named parent from grandchild state'
					},
					'main-header@': {
						template: 'Targeting main header from grandchild state'
					}
				}
			})

}])


TargetPractice.run(function($rootScope) {
	$rootScope.$on('$stateChangeError', console.log.bind(console))
})