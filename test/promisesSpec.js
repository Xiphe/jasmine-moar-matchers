/* globals describe, it, expect, beforeEach */
describe('promises', function() {
  'use strict';

  describe('toBeAPromise', function() {
    it('should exist', function() {
      expect(typeof expect().toBeAPromise).toBe('function');
    });

    it('should check if the object has a then method', function() {
      expect({then: function() {}}).toBeAPromise();
      expect({then: 'foo'}).not.toBeAPromise();
    });
  });

  describe('toBeAFullPromise', function() {
    it('should exist', function() {
      expect(typeof expect().toBeAFullPromise).toBe('function');
    });

    it('should check if the object has a then method', function() {
      var promise = {
        then: function() {}
      };
      promise['catch'] = function() {};
      promise['finally'] = function() {};

      expect(promise).toBeAFullPromise();
      delete promise['catch'];
      expect(promise).not.toBeAFullPromise();
    });
  });

  describe('toBeAQPromise', function() {
    it('should exist', function() {
      expect(typeof expect().toBeAQPromise).toBe('function');
    });

    it('should check if the object has a then method', function() {
      var promise = {
        then: function() {},
        progress: function() {},
        done: function() {}
      };
      promise['catch'] = function() {};
      promise['finally'] = function() {};

      expect(promise).toBeAQPromise();
      delete promise.done;
      expect(promise).not.toBeAQPromise();
    });
  });

  describe('toBeADeferred', function() {
     it('should exist', function() {
      expect(typeof expect().toBeADeferred).toBe('function');
    });

    it('should check if the object has a then method', function() {
      var deferred = {
        resolve: function() {},
        reject: function() {}
      };

      expect(deferred).toBeADeferred();
      delete deferred.resolve;
      expect(deferred).not.toBeADeferred();
    });
  });

  describe('toBeAQDeferred', function() {
    it('should exist', function() {
      expect(typeof expect().toBeAQDeferred).toBe('function');
    });

    it('should check if the object has a then method', function() {
      var deferred = {
        promise: {},
        resolve: function() {},
        reject: function() {},
        notify: function() {}
      };

      expect(deferred).toBeAQDeferred();
      delete deferred.notify;
      expect(deferred).not.toBeAQDeferred();
    });
  });

  describe('toBeRejected', function() {
    var promise;
    var rejected;

    beforeEach(function() {
      promise = {
        isRejected: function() { return rejected; }
      };
      rejected = true;
    });

    it('should exist', function() {
      expect(typeof expect().toBeRejected).toBe('function');
    });

    it('should fail when isRejected does not exist', function() {
      expect(function() {
        expect({}).toBeRejected();
      }).toThrow();
    });

    it('should know when a promise is rejected', function() {
      expect(promise).toBeRejected();
    });

    it('should know when a promise is not rejected', function() {
      rejected = false;
      expect(promise).not.toBeRejected();
    });
  });

  describe('toBeResolved', function() {
    var promise;
    var resolved;

    beforeEach(function() {
      promise = {
        isResolved: function() { return resolved; }
      };
      resolved = true;
    });

    it('should exist', function() {
      expect(typeof expect().toBeResolved).toBe('function');
    });

    it('should fail when isResolved does not exist', function() {
      expect(function() {
        expect({}).toBeResolved();
      }).toThrow();
    });

    it('should know when a promise is resolved', function() {
      expect(promise).toBeResolved();
    });

    it('should know when a promise is not resolved', function() {
      resolved = false;
      expect(promise).not.toBeResolved();
    });
  });

  describe('toBePending', function() {
    var promise;
    var pending;

    beforeEach(function() {
      promise = {
        isPending: function() { return pending; }
      };
      pending = true;
    });

    it('should exist', function() {
      expect(typeof expect().toBePending).toBe('function');
    });

    it('should fail when isPending does not exist', function() {
      expect(function() {
        expect({}).toBePending();
      }).toThrow();
    });

    it('should know when a promise is pending', function() {
      expect(promise).toBePending();
    });

    it('should know when a promise is not pending', function() {
      pending = false;
      expect(promise).not.toBePending();
    });
  });
});