'use strict';
angular.module('piknikoApp')
.constant('Config', {

  // gulp environment: injects environment vars
  // https://github.com/mwaylabs/generator-m-ionic#gulp-environment
  ENV: {
    /*inject-env*/
    'apiEndpoint': 'http://localhost:8080/api'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  // https://github.com/mwaylabs/generator-m-ionic#gulp-build-vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});
