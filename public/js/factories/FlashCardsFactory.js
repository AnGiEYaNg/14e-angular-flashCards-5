app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data;
            });

        },

        getOneCard: function(id) {
            return $http.get('/cards/'+ id )
            .then(function (response){
                console.log("card in factory",response.data)
                return response.data
            })
        },

        addNewCard: function (card) {
           return $http.post('/cards', card)
           .then(function (response) {
               return response.data;
           });
        },

        updateCard: function (card){
            return $http.post('/cards/update', card)
            .then(function (response){
                return response.data
            })
        },

        deleteCard: function(card){
            return $http.post('/cards/delete',card)
            .then(function (response){
                return response.data
            })
        }


    };

});
