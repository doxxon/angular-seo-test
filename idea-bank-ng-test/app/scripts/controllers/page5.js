(function(angular, undefined) {'use strict';

angular.module('ideaBank.controllers')
  .controller('Page5Ctrl', ['$scope', 'service.testNg',
    function($scope, testNgSrv) {
      function init() {
        testNgSrv.load(5)
          .success(setMessage)
      }

      function setMessage(data) {
        $scope.message = data.message;
      }

      init();
    }
  ]);

})(angular);
