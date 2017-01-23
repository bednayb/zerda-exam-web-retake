var test = require('tape')
var numberify = require('./numberify.js')

// test('random case and 3 digit number return number itself')
// test('hoodie case with 2 digit number returns padded number')
test('tech case with < 500 number returns number+500')

//TEST WORK
test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

//NUMBERiFY WORKS
test('random case and 3 digit number return number itself', function (t) {
  t.equal(numberify("hoodie",144), 144);
  t.end();
})

test('hoodie case with 2 digit number returns padded number', function (t) {
  t.equal(numberify("hoodie",44), "044");
  t.end();
})
