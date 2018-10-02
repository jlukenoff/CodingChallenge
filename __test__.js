const { dollarsToText, maxRangeSum } = require('./solutions.js');

const assert = (expected, actual) => {
  if (expected === actual) {
    return 'Test passed';
  }
  return `Test Failed: expected ${expected} but got ${actual}`;
};

const testCases = [
  {
    expected: 16,
    actual: maxRangeSum([7, -3, -10, 4, 2, 8, -2, 4, -5, -2]),
  },
  {
    expected: 'ThreeDollars',
    actual: dollarsToText(3),
  },
  {
    expected: 'FourHundredSixtySixDollars',
    actual: dollarsToText(466),
  },
  {
    expected: 'OneThousandTwoHundredThirtyFourDollars',
    actual: dollarsToText(1234),
  },
  {
    expected: 'TenDollars',
    actual: dollarsToText(10),
  },
  {
    expected: 'TwentyOneDollars',
    actual: dollarsToText(21),
  },
];

testCases.forEach(({ expected, actual }) => console.log(assert(expected, actual)));
