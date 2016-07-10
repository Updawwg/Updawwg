'use strict';
/*******************************
 * Dog In Controller
 *
 ********************************/

module.exports = function(app) {

    app.controller('DawgInController', ['$scope', '$rootScope', 'PawthenticationService', function($scope, $rootScope, PawthenticationService) {
        PawthenticationService.ClearCredentials();

        $scope.logIn = function() {
            PawthenticationService.LogIn($scope.username, $scope.password, function(response) {
                if (response.success) {
                    PawthenticationService.SetCredentials($scope.username, $scope.password);
                }//end if******
            })//end PawthenticationService call
        }; //end $scope.logIn***************************
    }]); //end controller******************
}; //***********end MODULE*************
