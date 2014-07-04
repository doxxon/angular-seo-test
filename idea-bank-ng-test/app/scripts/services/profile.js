(function(angular, undefined) {'use strict';

angular.module('ideaBank.services')
  .factory('service.profile', ['lodash', 'api.Profile',
    function(_, Profile) {

      var profile,
          attributes = ['id', 'username', 'email'];

      function load() {
        return _getProfile()
          .then(function(data) {
            profile = data;
          });
      }

      function getCurrent() {
        return _sanitize(profile);
      }

      function _getProfile() {
        return Profile.get().$promise;
      }
      function _sanitize(obj) {
        return _.pick(obj, attributes);
      }

      return {
        load: load,
        getCurrent: getCurrent 
      };
    }
  ]);

})(angular);
