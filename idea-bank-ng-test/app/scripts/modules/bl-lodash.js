(function(angular, lodash, undefined) {'use strict';

angular.module('bl.lodash', [])
  .factory('lodash', function() {
    return _;
  });

})(angular, _);
