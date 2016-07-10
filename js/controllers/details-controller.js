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



    // add ups!
    $scope.upDawg = function () {
      console.log("dogD", $scope.dog);
      DogService.setUps($scope.dog);
    }


    // back button
    $scope.back = function () {
        $location.path('/feed');
      }

  }])
}
