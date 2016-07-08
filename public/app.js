(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*******************************
* Feed Controller
*
********************************/

module.export = function(app) {

  app.controller('FeedController', ['$scope', 'DogService', function($scope, DogService){

    /*******************************
    * get dog data from service
    ********************************/
    $scope.dawgz = DogService.getDawgz();


  }])
}

},{}],2:[function(require,module,exports){
'use strict';

/*******************************
* UpDawwg App
* Date: 7-7-2016
********************************/

(function () {

  var app = angular.module('UpDawwgApp', ['ngRoute']);

  //router
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: '',
      conroller: ''
    }).when('/feed', {
      templateUrl: 'feed.html',
      controller: 'FeedController'
    }).when('/details', {
      templateUrl: '',
      controller: ''
    }).otherwise({
      redirectTo: '/404'
    });
  }]);

  // Services
  require('./services/dog-service')(app);

  // Controllers
  require('./controllers/feed-controller')(app);

  // Filters

  // Directives
})();
},{"./controllers/feed-controller":1,"./services/dog-service":3}],3:[function(require,module,exports){
/*******************************
* Dog Service
*
********************************/

module.exports = function(app) {

  app.factory('DogService', function($http) {

      let dawgz = [];

      let dog = {
        name: '',
        image: '',
        breed:'',
        age: '',
        description: '',
        ups: '',
      };



      /*******************************
      * return object
      ********************************/
      return {
        getDawgz() {
          return dawgz;
        },

        getDog(name) {
          //filter: find dog by name

        },

        setDog() {


        },

      } //********************************//

  })

}

},{}]},{},[2])