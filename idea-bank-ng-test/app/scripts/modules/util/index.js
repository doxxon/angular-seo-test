(function(angular, undefined) {'use strict';

angular.module('util', [])
  .factory('util', function() {
    var exports = {};

    /**
     * @param {function} ctor Constructor function which needs to inherit the
     *      prototype
     * @param {function} superCtor Constructor function to inherit prototype from.
     */
    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
    exports.inherits = inherits;

    return exports;
  });

})(angular);
