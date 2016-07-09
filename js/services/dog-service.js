/*******************************
* Dog Service
*
********************************/

module.exports = function(app) {

  app.factory('DogService', ['$http', function($http) {

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

        setDog(data) {
          $http({
            url: '/dogs',
            method: 'POST',
            data: data,
          })

        },

      } //********************************//

  }])//end DogService**********************//

}
