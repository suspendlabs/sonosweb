'use strict';

var SonosCtrl = ['$scope', 'Sonos', 'zones', function($scope, Sonos, zones) {
  $scope.zones = zones;
}];

SonosCtrl.resolve = {
  zones: function($q, Zone) {
    var deferred = $q.defer();
    var zones = Sonos.zones({}, function() {
      deferred.resolve(zones);
    });
    return deferred.promise;
  }
};
