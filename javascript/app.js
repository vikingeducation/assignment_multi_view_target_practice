var TargetPractice = angular.module('TargetPractice', ['ui.router']);

TargetPractice.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('parent', {
			url: '/',
			views: {
				'@': {
					template: "Targeting unnamed view from parent state",
				},
				'named-parent@': {
					template: "Targeting named view from parent state",
				},
				'main-header@': {
					template: "Targeting header from parent state",
				}
			}
		})
		.state('parent.child', {
			url: '/child',
			views: {
				'@': {
					templateUrl: 'javascript/templates/child.html',
				},
				'named-child@parent.child': {
					template: 'Targeting unnamed child view from child state',
				},
				'named-parent@': {
					template: "Targeting named parent view from child state",
				},
				'main-header@': {
					template: 'Targeting header from child state',
				}
			}
		})
});
