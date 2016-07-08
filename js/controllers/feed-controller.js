/*******************************
* Feed Controller
*
********************************/

module.exports = function(app) {

  app.controller('FeedController', ['$scope', 'DogService', function($scope, DogService){

    /*******************************
    * get dog data from service
    ********************************/
    $scope.dawgz = DogService.getDawgz();


    $scope.deets = function () {
      //1. grab dog details
      //2. redirect to detail view

    }

  }])
}
