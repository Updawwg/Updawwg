/*******************************
* UpDawwg App
* Date: 7-7-2016
********************************/

(function() {

let app = angular.module('UpDawwgApp', ['ngRoute','ngAnimate']);


//router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '',
      conroller: '',
    })

    .when('/feed', {
      templateUrl: 'feed.html',
      controller: 'FeedController',
    })

    .when('/details', {
      templateUrl: '',
      controller: '',
    })

    .otherwise({
      redirectTo: '/404',
    })
}])


// Services
require('./services/dog-service')(app);

// Controllers
require('./controllers/feed-controller')(app);
require('./controllers/nav-controller')(app);




// Filters

// Directives



})();
