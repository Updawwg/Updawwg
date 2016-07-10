/*******************************
* Feed Controller
*
********************************/

module.exports = function(app) {

  app.controller('FeedController', ['$scope', '$location', 'DogService', function($scope, $location, DogService){

    /*******************************
    * get dog data from service
    ********************************/
    $scope.dawgz = DogService.getDawgz();
    $scope.dog = {};
    
    $scope.url = function (path) {
      return './assets/' + path;
    };


    $scope.deets = function (dogObj) {
      console.log('hello trying to get deets');

      DogService.dogDeets(dogObj);
      $location.path('/details');
    };

    ($scope.showDogs = function() {
      console.log('show dogs');
      $scope.dawgz = DogService.getDawgz();
    })();

  }])
}
