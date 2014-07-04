(function(angular, undefined) {'use strict';

angular.module('ideaBank.apis')
  .factory('api.Profile', ['$resource', function($resource) {

    return $resource('http://localhost:3000/api/v1/profile', {}, {
      update: { method: 'PUT' }
    });

  }]);

})(angular);
