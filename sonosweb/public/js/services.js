(function() {
  'use strict';
  angular.module('sonosweb.services', [
    'ngResource',
    'sonosweb.filters'
  ])
  .factory('Sonos', function($resource) {
      return $resource('http://:hostname::port/:action/:argument/:param1/:param2', {
          hostname: 'localhost',
          port: '5005'
      },{
        zones: {
          params: {
            action: 'zones'
          }
        },
        lockvolumes: {
          params: {
            action: 'lockvolumes'
          }
        },
        unlockvolumes: {
          params: {
            action: 'unlockvolumes'
          }
        },
        pauseall: {
          params: {
            action: 'pauseall',
            argument: '@timeout'
          }
        },
        resumeall: {
          params: {
            action: 'resumeall',
            argument: '@timeout'
          }
        },
        preset: {
          params: {
            action: 'preset',
            argument: '@preset'
          }
        },
        reindex: {
          params: {
            action: 'reindex'
          }
        },
        play: {
          params: {
            action: '@zone'
          }
        },
        pause: {
          params: {
            action: '@zone'
          }
        },
        pauseplay: {
          params: {
            action: '@zone'
          }
        },
        volume: {
          params: {
            action: '@zone',
            param1: '@volume'
          }
        },
        groupVolume: {
          params: {
            action: '@zone',
            param1: '@volume'
          }
        },
        mute: {
          params: {
            action: '@zone'
          }
        },
        unmute: {
          params: {
            action: '@zone'
          }
        },
        groupMute: {
          params: {
            action: '@zone'
          }
        },
        groupUnmute: {
          params: {
            action: '@zone'
          }
        },
        seek: {
          params: {
            action: '@zone',
            param1: '@index'
          }
        },
        trackseek: {
          params: {
            action: '@zone',
            param1: '@seconds'
          }
        },
        next: {
          params: {
            action: '@zone'
          }
        },
        previous: {
          params: {
            action: '@zone'
          }
        },
        favorite: {
          params: {
            action: '@zone',
            param1: '@favorite'
          }
        },
        repeat: {
          params: {
            action: '@zone',
            argument: '@state'
          }
        },
        shuffle: {
          params: {
            action: '@zone',
            argument: '@state'
          }
        },
        say: {
          params: {
            action: '@zone',
            param1: '@phrase',
            param2: '@language'
          }
        }
      });
  });
})();
