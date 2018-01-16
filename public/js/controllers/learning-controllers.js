/**
 * Created by Tadashi on 15/01/2018.
 */
angular.module('coinView')
    .controller('LearningController', function($scope, $http) {
        $scope.coins = [
            /*{
                name: 'LandCoin',
                last_price: 11.00,
                price: 13.00,
                total: 0
            },
            {
                name: 'Bitcoin',
                last_price: 1312.00,
                price: 13123.00,
                total: 0
            }*/
        ];

        //$http.get('https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=2')
        $http.get('/coins')
        .success(function (response) {
            let list = response;
            console.log(list['name']);
                $scope.coins = response;
            Object.getOwnPropertyNames(list).forEach(function (val, index, array) {
                console.log(val + ' -> ' + list[val]['name']);
            });
        })
        .error(function(err){
            console.log(err)
        });


    });