/*******************************
* Add Dog Form Controller
*
********************************/

module.exports = function(app) {

  app.controller('AddDogFormController', ['$scope', 'DogService', function( $scope, DogService ){
      $scope.dawgz = DogService.getDawgz();
      $scope.dogObj = {
        name: $scope.name,
        image: $scope.image,
        breed:$scope.breed,
        age: $scope.age,
        description: $scope.description,
      };

      $scope.submit = function() {
        console.log($scope.dogObj);
        // let dogObj = {}
        //
        //
        // DogService.setDog(dogObj);
        // $scope.dawgz = DogService.getDawgz();
        location.href = "#/feed"

      };

  }])

}
