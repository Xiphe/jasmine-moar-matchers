/* globals jasmine, beforeEach */
(function(angular) {
  'use strict';

  beforeEach(function() {
    jasmine.addMatchers({
      toAngularEqual: function() {
        return {
          compare: function(actual, expected) {
            if (!angular || typeof angular.equals === 'undefined') {
              return {
                pass: false,
                message: 'Could not check equality with angular, since angular does not exist'
              };
            }

            var pass = angular.equals(actual, expected);

            return {
              pass: pass,
              message: jasmine.pp(actual) + ' does ' + (!pass ? 'not ' : '') + ' angular-equal ' + jasmine.pp(expected)
            };
          }
        };
      }
    });
  });
})(window.angular);
