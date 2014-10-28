/* globals describe, it, expect */
describe('toAngularEqual', function() {
  'use strict';

  it('should exist', function() {
    expect(typeof expect().toAngularEqual).toBe('function');
  });

  it('should know when two object are equal', function() {
    expect({foo: 'bar'}).toAngularEqual({foo: 'bar'});
  });

  it('should know when two object are not equal', function() {
    expect({foo: 'bar'}).not.toAngularEqual({foo: 'baz'});
  });

  it('should ignore $-prefixed entries on compared objects', function() {
    expect({foo: 'bar'}).toAngularEqual({foo: 'bar', $lorem: 'ipsum'});
  });

  it('should fail if angular is missing', function() {
    var backup = window.angular.equals;
    delete window.angular.equals;
    expect(function() {
      expect({}).toAngularEqual({});
    }).toThrow();
    window.angular.equals = backup;
  });
});