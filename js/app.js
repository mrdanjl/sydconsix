angular.module('sydconsixApp', ['ionic', 'sydconsix.controllers', 'sydconsix.directives'])

.constant('SydconsixConfig', {
  'channels': [
    {
      'header':       'sydconsix_header.png',
      'image':        'PageSixConfidential-SydConSix.png'      
    },
    {
      'header':       'sydcon_header.png',
      'image':        'PageSixConfidential-Confidential.png'      
    },
    {
      'header':       'pagesix_header.png',
      'image':        'PageSixConfidential-PageSix.png'      
    }
  ]
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('content', {
      url: "/",
      controller: 'MainCtrl',
      templateUrl: "templates/main.html"
    });

  $urlRouterProvider.otherwise('/');
});

