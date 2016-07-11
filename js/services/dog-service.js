/*******************************
* Dog Service
*
********************************/

module.exports = function(app) {

  app.factory('DogService', ['$http', function($http) {

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

        dogDeets(dogObj) {
          dogD = dogObj;
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
