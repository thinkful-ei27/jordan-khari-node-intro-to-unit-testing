'use strict';

const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const chai = require('chai');

const fizzBuzzer = require('../fizzBuzzer');
const should = chai.should();
chai.use(chaiHttp);



describe('fizzBuzzer', function() {

  //normal cases
  it('should return "fizz-buzz" if a number is divisable by 15', function() {
    const normalCases =   [
      
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'}
    ];
  
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
  it('should return "fizz" if a number is divisable by 3', function() {
    const normalCases =   [
      {num: 3, expected: 'fizz'},
      {num: 9, expected: 'fizz'},
    ];
  
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return "buzz" if a number is divisable by 5', function() {
    const normalCases =   [
      {num: 5, expected: 'buzz'},
      {num: 25, expected: 'buzz'},
    ];
  
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return the number if it is not divisible by 3, 5, or 15', function() {
    const normalCases =   [
      {num: 1, expected: 1},
      {num: 4, expected: 4},
      {num: 67, expected: 67}
    ];
  
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return error if input is not a number', function() {
    const badInputs = [
      'a',
      false,
      {}
    ];

    badInputs.forEach(function(input) {
      (function(){ fizzBuzzer(input);})
        .should.throw(Error);
    });
  });

});

