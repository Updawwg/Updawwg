/*******************************
* Add Dog Form Controller
*
********************************/

module.exports = function(app) {

  app.controller('AddDogFormController', ['$scope', 'DogService', function( $scope, DogService ){
      $scope.dawgz = DogService.getDawgz();

      // $scope.submitDog = function() {
      //   let dogObj = {}
      //
      //
      //   DogService.setDog(dogObj);
      //   $scope.dawgz = DogService.getDawgz();
      //
      // };

  }])

}
