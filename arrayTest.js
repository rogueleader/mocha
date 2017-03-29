var chai = require('chai');
var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0 , 'Array length was not 0');
  });

  it('should check if value present',function() {
    var arr=[4,6,9];
    var value=6;
    assert.include(arr,value,'value not present');
  });

});
