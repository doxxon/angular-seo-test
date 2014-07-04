(function(angular, undefined) {'use strict';

angular.module('ideaBank.apis')
  .factory('api.Profile', ['Restangular', function(Restangular) {

    var Profile;

    Restangular.extendModel('profile', function(obj) {
      return angular.extend(obj, {
        updateLastLoginAt: function() {
          console.log('update... last login at');
        },

        putSingle: function() {
          return this.customPUT();
        }
      });
    });

    Profile = Restangular.oneUrl('profile');

    angular.extend(Profile, {
      getSingle: getSingle
    })

    function getSingle() {
      // Actually, profile is single resource
      // GET /api/v1/profile
      return this.customGET();
    }
    function putSingle() {
      return this.customPUT();
    }
    return Profile;
  }]);

})(angular);
