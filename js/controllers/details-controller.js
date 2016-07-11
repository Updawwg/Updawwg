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
    $scope.ups = DogService.getDeets().rating;
    $scope.dawgz = DogService.getDawgz();

    $scope.url = function (path) {
      return './assets/photos/' + path;
    };


    if ($scope.status === false) {
      $location.path('/feed');
    }



    // add ups!
    $scope.upDawg = function (dog) {
      $http({
        url: '/ups',
        method: 'POST',
        data: dog,
      }).then(function(response){
        $scope.ups = response.data.rating
        $scope.dawgz = DogService.getDawgz();
        return $scope.dawgz
      })

    }



    // back button
    $scope.back = function () {
        $location.path('/feed');
      }

  }])
}
