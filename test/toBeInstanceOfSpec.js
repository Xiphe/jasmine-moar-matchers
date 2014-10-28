/* globals describe, it, expect */
describe('toBeInstanceOf', function() {
  'use strict';

  it('should exist', function() {
    expect(typeof expect().toBeInstanceOf).toBe('function');
  });

  it('should find instances of function', function() {
    expect(function() {}).toBeInstanceOf(Function);
  });

  it('should find instances of objects', function() {
    expect([]).toBeInstanceOf(Object);
  });

  it('should know when an object is not an instance of something', function() {
    expect(new Number(4)).not.toBeInstanceOf(String);
  });
});