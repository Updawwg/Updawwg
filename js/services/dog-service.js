/*******************************
* Dog Service
*
********************************/

module.exports = function(app) {

  app.factory('DogService', ['$http', '$location', function($http, $location) {

      let dawgz = [];
      let dogD = {};

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
          $http({
            url: './dogs',
            method: 'GET'
          }).then(function(response){
            dawgz = response.data;
            return dawgz;
          })
          return dawgz;
        },

        //clicking on a feed item pulls up the details
        dogDeets(dogObj) {

          dogId = dogObj.id;
          $http({
            url: '/dogs',
            method: 'GET',
          }).then(function(response){

            dawgz = response.data;

            dawgz.forEach(function(e,i){
              console.log(e);
              if (e.id === dogId) {
                dogD = e;
              }
            })

            $location.path('/details');
            return dogD;

          });
          return dogD

        },

        //adds new dog to database
        setDog(data) {
          $http({
            url: '/dogs',
            method: 'POST',
            data: data,
          })

        },

        // increment UPs (addition happens in the back end)
        setUps(dogObj){
          $http({
            url: '/ups',
            method: 'POST',
            data: dogObj,
          })
        },

        getDeets(){
          return dogD;
        },

      } //********************************//

  }])

}
