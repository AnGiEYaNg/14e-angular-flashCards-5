app.config(function($stateProvider){
	$stateProvider.state('stats',{
		url: '/stats',
		templateUrl: '/templates/stats.html',
		controller: 'StatsController'
	})

	$stateProvider.state('new-card',{
		url: '/new-card',
		templateUrl: '/templates/new-card.html',
		controller: 'NewCardController'
	})


	$stateProvider.state('flash-card',{
		url: '/flash-card',
		templateUrl: '/templates/flash-card.html',
		controller: 'MainController'
	})


	$stateProvider.state('manage-card',{
		url: '/manage-card/:id',
		templateUrl: '/templates/manage-card.html',
		controller: 'CardManagerController'
	})

	$stateProvider.state('manage-card.edit-card',{
		url: '/edit-card',
		templateUrl: '/templates/edit-card.html',
		controller: 'EditCardController'
	})

	$stateProvider.state('manage-card.delete-card',{
		url: '/delete-card',
		templateUrl: '/templates/delete-card.html',
		controller: 'DeleteCardController'
	})
})