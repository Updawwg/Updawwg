/*******************************
* Add Dog Form Controller
*
********************************/

module.exports = function(app){

  app.controller('AddDogFormController', ['$scope', 'DawgInService', function($scope, DawgInService){


      $scope.submitDog = function() {
        console.log(this);
      };

  }])
}
