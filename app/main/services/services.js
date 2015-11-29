'use strict';
angular.module('piknikoApp')
.service('Main', function ($log, $timeout) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };
})


.factory('ChangelogService', ['$resource', 'Config', function ($resource, Config) {
  return {
    addChangelog: function (populate) {
      var url = Config.ENV.apiEndpoint + '/addChangelog';
      return $resource(url).save(populate).$promise;
    },

    getUserChangelog: function (email) {
      var url = Config.ENV.apiEndpoint + '/getChangelog';
      return $resource(url).get({user_email: email}).$promise;
    },
  }
}])
