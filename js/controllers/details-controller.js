/*******************************
* Details Controller
* (/posts in backend)
********************************/

module.exports = function(app) {

  app.controller('DetailsController', ['$scope', '$location', 'DogService', function($scope, $location, DogService){

    /*******************************
    * comments and ups and posts
    ********************************/
    // $scope.ups = DogService.getUps();
    // $scope.posts = DogService.getPosts();
    $scope.comment = '';
    $scope.dog = DogService.getDeets();

    $scope.url = function (path) {
      return './assets/' + path;
    };


    if ($scope.status === false) {
      $location.path('/feed');
    }



    // add ups!
    $scope.upDawg = function () {
      DogService.setUps($scope.dog);

    }


    // back button
    $scope.back = function () {
        $location.path('/feed');
      }

  }])
}
