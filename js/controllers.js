angular.module('sydconsix.controllers', [])

.controller('MainCtrl', function($scope, $timeout, $http, SydconsixConfig) {
  $scope.channels        = SydconsixConfig.channels;  
  $scope.selectedChannel = 0;
  
  $scope.changeChannel= function(channel) {
    $scope.selectedChannel = channel;
  };
  
  /* load sequence */
  ionic.Platform.ready(function() {
    if (typeof(StatusBar) !== 'undefined') {
        StatusBar.overlaysWebView(false);
        StatusBar.styleBlackTranslucent();
    }  
  });
  
});
