const { add, subtract } = require('./mathUtils');
const chai = require('chai');
const expect = chai.expect;

describe('Math Utils', function() {
  describe('add', function() {
    it('should return the sum of two numbers', function() {
      expect(add(2, 3)).to.equal(5);
    });

    it('should return zero if both numbers are zero', function() {
      expect(add(0, 0)).to.equal(0);
    });

    it('should handle negative numbers', function() {
      expect(add(-5, 3)).to.equal(-2);
    });
  });

  describe('subtract', function() {
    it('should return the difference of two numbers', function() {
      expect(subtract(5, 3)).to.equal(2);
    });

    it('should return zero if both numbers are equal', function() {
      expect(subtract(10, 10)).to.equal(0);
    });

    it('should handle negative numbers', function() {
      expect(subtract(-5, 3)).to.equal(-8);
    });
  });
});
