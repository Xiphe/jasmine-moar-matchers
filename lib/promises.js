/* globals jasmine */
beforeEach(function() {
  'use strict';

  jasmine.addMatchers({
    toBeAPromise: function() {
      return {
        compare: function(actual) {
          var pass = actual.then instanceof Function;
          return {
            pass: pass,
            message: jasmine.pp(actual) + ' is ' + (!pass ? 'not ' : '') + 'a promise.'
          };
        }
      };
    },
    toBeAFullPromise: function() {
      return {
        compare: function(actual) {
          var pass = (
            actual.then instanceof Function &&
            actual['catch'] instanceof Function &&
            actual['finally'] instanceof Function
          );
          return {
            pass: pass,
            message: jasmine.pp(actual) + ' is ' + (!pass ? 'not ' : '') + 'a full promise.'
          };
        }
      };
    },
    toBeAQPromise: function() {
      return {
        compare: function(actual) {
          var pass = (
            actual.then instanceof Function &&
            actual['catch'] instanceof Function &&
            actual.progress instanceof Function &&
            actual['finally'] instanceof Function &&
            actual.done instanceof Function
          );
          return {
            pass: pass,
            message: jasmine.pp(actual) + ' is ' + (!pass ? 'not ' : '') + 'a promise matching the Q API.'
          };
        }
      };
    },
    toBeADeferred: function() {
      return {
        compare: function(actual) {
          var pass = (
            actual.resolve instanceof Function &&
            actual.reject instanceof Function
          );
          return {
            pass: pass,
            message: jasmine.pp(actual) + ' is ' + (!pass ? 'not ' : '') + 'a deferred object.'
          };
        }
      };
    },
    toBeAQDeferred: function() {
      return {
        compare: function(actual) {
          var pass = (
            actual.promise instanceof Object &&
            actual.resolve instanceof Function &&
            actual.notify instanceof Function &&
            actual.reject instanceof Function
          );
          return {
            pass: pass,
            message: jasmine.pp(actual) + ' is ' + (!pass ? 'not ' : '') + 'a deferred object matching the Q API.'
          };
        }
      };
    },
    toBeRejected: function() {
      return {
        compare: function(actual) {
          if (typeof actual.isRejected !== 'function') {
             throw new Error('Cant check if ' + jasmine.pp(actual) + ' is rejected due to missing isRejected method.');
          }

          var pass = actual.isRejected();
          return {
            pass: pass,
            message: 'Promise has ' + (!pass ? 'not ' : '') + 'been rejected.'
          };
        }
      };
    },
    toBeResolved: function() {
      return {
        compare: function(actual) {
          if (typeof actual.isResolved !== 'function') {
             throw new Error('Cant check if ' + jasmine.pp(actual) + ' is resolved due to missing isResolved method.');
          }

          var pass = actual.isResolved();
          return {
            pass: pass,
            message: 'Promise has ' + (!pass ? 'not ' : '') + 'been resolved.'
          };
        }
      };
    },
    toBePending: function() {
      return {
        compare: function(actual) {
          if (typeof actual.isPending !== 'function') {
             throw new Error('Cant check if ' + jasmine.pp(actual) + ' is pending due to missing isPending method.');
          }

          var pass = actual.isPending();
          return {
            pass: pass,
            message: 'Promise has ' + (!pass ? 'not ' : '') + 'been pending.'
          };
        }
      };
    },
    // TODO: toBeResolvedWith:
    // TODO: toBeRejectedWith:

  });
});
