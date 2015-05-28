app.controller('DeleteCardController',function($scope,$state,FlashCardsFactory){
	$scope.delete = function(){
		FlashCardsFactory.deleteCard($scope.card)
		.then(function(response){
			$scope.deleteResults = response
			setTimeout(function () {
				$state.go('flash-card')
			}, 3000)
		})
	}
})