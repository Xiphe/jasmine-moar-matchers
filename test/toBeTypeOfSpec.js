/* globals describe, it, expect */
describe('toBeTypeOf', function() {
  'use strict';

  it('should exist', function() {
    expect(typeof expect().toBeTypeOf).toBe('function');
  });

  it('should find instances of function', function() {
    expect(function() {}).toBeTypeOf('function');
  });

  it('should find instances of objects', function() {
    expect([]).toBeTypeOf('object');
  });

  it('should know when an object is not an instance of something', function() {
    expect(5).not.toBeTypeOf('string');
  });
});