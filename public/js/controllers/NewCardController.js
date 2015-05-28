app.controller('NewCardController', function (
    $scope,
    FlashCardsFactory,
    $rootScope,
    $state
) {

    $scope.submittingCard = false;

    $scope.card = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    };

    $scope.update = function (card) {
        $scope.submittingCard = true;
        FlashCardsFactory.addNewCard(card).then(function (card) {

            $rootScope.$broadcast('newCardAdded', card);
            $scope.submittingCard = false;
            $scope.card = {
                question: null,
                category: null,
                answers: [
                    { text: null, correct: false },
                    { text: null, correct: false },
                    { text: null, correct: false }
                ]
            };

            setTimeout(function () {
                $state.go('flash-card')
            }, 3000)

        });
    };

});