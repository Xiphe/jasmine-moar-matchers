/* globals jasmine, beforeEach */
(function(angular) {
  'use strict';

  beforeEach(function() {
    jasmine.addMatchers({
      toAngularEqual: function() {
        return {
          compare: function(actual, expected) {
            if (!angular || typeof angular.equals === 'undefined') {
              throw new Error('could not check object equality since angular does not exist');
            }

            var pass = angular.equals(actual, expected);

            return {
              pass: pass,
              message: jasmine.pp(actual) + ' does ' + (!pass ? 'not ' : '') + 'angular-equal ' + jasmine.pp(expected)
            };
          }
        };
      }
    });
  });
})(window.angular);
