(function(angular, undefined) {'use strict';

angular.module('ideaBank.apis', [
  'ngResource'
])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common = {
      'X-Auth-Token': 'HAQ3vgMh0gH6ZTe9jk5d34hvsyXj1wML0bZpRS3a'
    };
  }]);
  /*
  .config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000/api/v1');
    RestangularProvider.setDefaultHeaders({ 'X-Auth-Token': 'HAQ3vgMh0gH6ZTe9jk5d34hvsyXj1wML0bZpRS3a' });
    //RestangularProvider.setMethodOverriders(["put", "patch"]);
  }]);
  */

})(angular);
