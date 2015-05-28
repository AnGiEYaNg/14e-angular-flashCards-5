app.controller('CardManagerController',function($scope, $stateParams, FlashCardsFactory){
	console.dir($stateParams)

	$scope.card = FlashCardsFactory.getOneCard($stateParams.id)
	.then(function(card){
		console.log("card",card)
		$scope.card = card
	})

})