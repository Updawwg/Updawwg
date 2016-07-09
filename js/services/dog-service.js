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

  })//end DogService**********************//

}
