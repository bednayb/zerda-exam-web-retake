var test = require('tape')
var numberify = require('./numberify.js')

var firsttest ={
  case:"hoodie",
  number:144
}
var secondtest ={
  case:"hoodie",
  number:44
}
var secondtest ={
  case:"hoodie",
  number:44
}
var thirdtest ={
  case:"tech",
  number:244
}
var fourthtest ={
  case:"tech",
  number:844
}

//TEST WORK
test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

//NUMBERiFY WORKS
test('random case and 3 digit number return number itself', function (t) {
  t.equal(numberify(firsttest), 144);
  t.end();
})

test('hoodie case with 2 digit number returns padded number', function (t) {
  t.equal(numberify(secondtest), "044");
  t.end();
})

test('tech case with < 500 number returns number+500', function (t) {
  t.equal(numberify(thirdtest), 744);
  t.end();
})

test('tech case with < 800 number returns number+500 -1000 and string', function (t) {
  t.equal(numberify(fourthtest), "344");
  t.end();
})
