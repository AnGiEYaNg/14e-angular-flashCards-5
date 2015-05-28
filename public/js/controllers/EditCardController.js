app.controller('EditCardController',function($scope,$state,FlashCardsFactory){
	$scope.update = function(){
		FlashCardsFactory.updateCard($scope.card)
		.then(function(response){
			$scope.updateResults = response
			setTimeout(function () {
				$state.go('flash-card')
			}, 3000)
		})
	}
})