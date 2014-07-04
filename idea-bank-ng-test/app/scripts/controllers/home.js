(function(angular, undefined) {'use strict';

angular.module('ideaBank.controllers')
  .controller('HomeCtrl', ['$scope', 'service.profile',
    function($scope, profileSrv) {
      function init() {
        $scope.username = 'Long';

        profileSrv.load()
          .then(setProfile);
      }

      function setProfile() {
        var profile = profileSrv.getCurrent();
        $scope.email = profile.email;
      }

      init();
    }
  ]);

})(angular);
