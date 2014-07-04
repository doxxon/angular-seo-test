(function(angular, undefined) {'use strict';

angular.module('ideaBank.services')
  .factory('service.testNg', ['lodash', '$http',
    function(_, $http) {

      function load(index) {
        return $http.get('/api/message' + index);
      }

      return {
        load: load
      };
    }
  ]);

})(angular);
