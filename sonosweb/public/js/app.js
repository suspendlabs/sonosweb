(function() {
  'use strict';

  $(document).foundation();

  var routeConfig = {
    defaultRoute: '/',
    routes: {
      '/': {
        templateUrl: '/public/partials/main.html',
        controller: SonosCtrl,
        resolve: SonosCtrl.resolve
      }
    }
  };

  var app = angular.module('sonosweb', [
    'ngRoute',
    'sonosweb.services',
    'sonosweb.filters',
    'sonosweb.directives',
    'mm.foundation'
  ]);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      if (routeConfig.routes !== undefined) {
        angular.forEach(routeConfig.routes, function(route, path) {
            $routeProvider.when(path, route);
        });
      }

      if (routeConfig.defaultRoute !== undefined) {
        $routeProvider.otherwise({
          redirectTo: routeConfig.defaultRoute
        });
      }

      $locationProvider.html5Mode(true);
    }
  ]);
})();
