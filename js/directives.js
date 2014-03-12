angular.module('sydconsix.directives', [])

.directive('combineHeader', function (SydconsixConfig, $timeout) {
  return {
    template: '<div class="bar bar-header bar-still" style="background:url(\'img/{{ header }}\'); background-size:100% 100%; background-repeat:no-repeat"></div>',
    restrict: 'E',
    replace: true,
    scope: {
      selectedChannel: '='
    },
    link: function(scope, element, attrs) {
      return $timeout(function() {
        scope.$watch('selectedChannel', function(selectedChannel) {
          scope.header = SydconsixConfig.channels[selectedChannel].header;
        });
      });
    }
  };
});