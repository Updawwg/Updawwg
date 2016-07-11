/*******************************
* Details Controller
* (/posts in backend)
********************************/

module.exports = function(app) {

  app.controller('DetailsController', ['$scope', '$http', '$location', 'DogService', function($scope, $http, $location, DogService){

    /*******************************
    * comments and ups and posts
    ********************************/
    // $scope.ups = DogService.getUps();
    // $scope.posts = DogService.getPosts();
    $scope.comment = '';
    $scope.dog = DogService.getDeets();
    $scope.dawgz = DogService.getDawgz();

    $scope.url = function (path) {
      return './assets/photos/' + path;
    };


    if ($scope.status === false) {
      $location.path('/feed');
    }



    // add ups!
    $scope.upDawg = function (dog) {
      console.log('data', dog);

      DogService.setUps(dog);

    }



    // back button
    $scope.back = function () {
        $location.path('/feed');
      }

  }])
}
