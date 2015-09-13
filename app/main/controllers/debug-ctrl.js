'use strict';
angular.module('FitterMe')
.controller('DebugCtrl', function ($log, $scope, ChangelogService, Config, Main) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:');
  ChangelogService.getUserChangelog().then(function(idea_result) {                                                          
    console.log(idea_result)
  })
  
  // bind data from services
  $scope.someData = Main.someData;
  $scope.ENV = Config.ENV;
  $scope.BUILD = Config.BUILD;

  // PASSWORD EXAMPLE
  $scope.password = {
    input: '', // by user
    strength: ''
  };

  $scope.grade = function(){
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  }
});
