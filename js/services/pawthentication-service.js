'use strict'
module.exports = function(app) {
    app.factory('PawthenticationService', ['$http', '$rootScope', '$cookies', '$location', function($http, $rootScope, $cookies, $location) {
        let service = {};
        //Service functions*******************************
        service.LogIn = function(name, password, callback) {
            $http.post('/users', {
                    name: name,
                    password: password
                }).then(function(response) {
                    callback(response);
                    $location.path('/about');
                });
        }; //service.LogIn ends***********************
        service.SetCredentials = function(username, password) {

            $rootScope.globals = {
                currentUser: {
                    name: name,
                    password: password
                }
            };
            $cookies.put('globals', $rootScope.globals)
        }; //service.SetCredentials ends******************

        service.ClearCredentials = function() {
            $rootScope.globals = {};
            $cookies.remove('globals');
        };
        return service;
    }]);
}
