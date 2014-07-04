(function(angular, undefined) {'use strict';

angular.module('ideaBank.models', [
  'pouchdb'
])
  .value('dbName', 'myPouchDB')
  .provider('db', ['dbName', function dbProvider(dbName) {
    this.$get = function dbFactory() {
      return new Pouch(dbName);
    }
  });

})(angular);
