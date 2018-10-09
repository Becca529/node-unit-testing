const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {

    it('should throw an error if input is not a number', function() {
        const badInputs = [
            "string", true, {}, [], null, NaN
            ]
        badInputs.forEach(input => {
            should => { 
                fizzBuzzer(input).to.throw(Error);
            };
        });
    });

    it('should return "fizz-buzz" for multiples of 15', function() {
        [15, 30, 45].forEach(input => {
          (fizzBuzzer(input)).should.equal('fizz-buzz');
        });
    });
    
    it('should return "fizz" for multiples of 3', function() {
        [3, 6, 9, 12].forEach(input => {
          (fizzBuzzer(input)).should.equal('fizz');
        });
        });
    
    
    it('should return "buzz" for multiples of 5', function() {
        [5, 10, 20].forEach(input => {
          (fizzBuzzer(input)).should.equal('buzz');
        });
    });
    
    it('should return number if not mult of 3 or 5', function() {
        [1, 2, 4, 7].forEach(input => {
            (fizzBuzzer(input)).should.equal(input);
        });
    });
});


