(function(angular, undefined) {'use strict';

angular.module('ideaBank.controllers')
  .controller('Page3Ctrl', ['$scope', 'service.testNg',
    function($scope, testNgSrv) {
      function init() {
        testNgSrv.load(3)
          .success(setMessage)
      }

      function setMessage(data) {
        $scope.message = data.message;
      }

      init();
    }
  ]);

})(angular);
