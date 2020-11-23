const { test, expect } = require('@jest/globals');

//const { multiply, power, divide, accounting } = require('../myMath');
const myMath = require('../myMath');

test('Proper product between tho numbers', () => {
   expect(myMath.multiply(0, Infinity)).toBe(undefined);
   expect(myMath.multiply(Infinity, 0)).toBe(undefined);
   expect(myMath.multiply(1, Infinity)).toBe(Infinity);
   expect(myMath.multiply(2, 8)).toBe(16);
   expect(myMath.multiply(3, 7)).toBe(21);
   expect(myMath.multiply(4, 8)).toBe(32);
   expect(myMath.multiply(5, 3)).toBe(15);
   expect(myMath.multiply(6, 6)).toBe(36);
   expect(myMath.multiply(Infinity,Infinity)).toBe(Infinity);
});

test('Proper Exponentiation (Power)', () => {
   expect(myMath.power(0, 0)).toBe(undefined);
   expect(myMath.power(0, -5)).toBe(Infinity);
   expect(myMath.power(0, 5)).toBe(0);
   expect(myMath.power(0, Infinity)).toBe(0);
   expect(myMath.power(0.5, Infinity)).toBe(0);
   expect(myMath.power(1, Infinity)).toBe(undefined);
   expect(myMath.power(10, 0)).toBe(1);
   expect(myMath.power(1, 10)).toBe(1);
   expect(myMath.power(2, 3)).toBe(8);
   expect(myMath.power(3, 3)).toBe(27);
   expect(myMath.power(4, 4)).toBe(256);
   expect(myMath.power(Infinity, 0)).toBe(undefined);
   expect(myMath.power(Infinity,Infinity)).toBe(Infinity);
});

test('Correctly Divide two numbers', () => {
   expect(myMath.divide(0,0)).toBe(undefined);
   expect(myMath.divide(1,2)).toBe(0.5);
   expect(myMath.divide(2,0)).toBe(Infinity);
   expect(myMath.divide(3,Infinity)).toBe(0);
   expect(myMath.divide(Infinity,Infinity)).toBe(undefined);
});

test('Properly shows financial numbers', () => {
   expect(myMath.accounting(-10)).toBe('(10)');
   expect(myMath.accounting(NaN)).toBe('NaN');
   expect(myMath.accounting(undefined)).toBe(undefined);
   expect(myMath.accounting(Infinity)).toBe('Infinity');
   expect(myMath.accounting('Word')).toBe('Word');
   expect(myMath.accounting(100)).toBe('100');
   expect(myMath.accounting(-10)).toBe('(10)');
   expect(myMath.accounting(null)).toBe(undefined);
});