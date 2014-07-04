(function(angular, undefined) {'use strict';

angular.module('ideaBank.controllers')
  .controller('Page2Ctrl', ['$scope', 'service.testNg',
    function($scope, testNgSrv) {
      function init() {
        testNgSrv.load(2)
          .success(setMessage);
      }

      function setMessage(data) {
        $scope.message = data.message;
      }

      init();
    }
  ]);

})(angular);
