angular.module('sydconsixApp', ['ionic', 'sydconsix.controllers', 'sydconsix.directives'])

.constant('SydconsixConfig', {
  'channels': [
    {
      'header':       'sydconsix_header.png',
      'image':        'PageSixConfidential-SydConSix.jpg'      
    },
    {
      'header':       'sydcon_header.png',
      'image':        'PageSixConfidential-Confidential.jpg'      
    },
    {
      'header':       'pagesix_header.png',
      'image':        'PageSixConfidential-PageSix.jpg'      
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

