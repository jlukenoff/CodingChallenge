const maxRangeSum = (nums) => {
  // declare sum of current range
  let currentSum = 0;
  // declare greatest sum found so far
  let greatestSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i] < 0 ? 0 : currentSum + nums[i];
    if (currentSum > greatestSum) {
      greatestSum = currentSum;
    }
  }
  return greatestSum;
};

const textByPositions = {
  ones: ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
  tens: ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
  teens: ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
};

const dollarsToText = (int, str = '') => {
  // declare string and length of given int
  const intString = int.toString();
  const intLength = intString.length;
  // base cases
  if (intString === '0' && str === '') return 'ZeroDollars';
  if (intString === '1' && str.length === 0) return 'OneDollar';
  if (intString === '0' || intLength === 0) return `${str}Dollars`;
  if (intString === '1') return `${str}OneDollars`;
  if (intLength === 1) return `${str + textByPositions.ones[Number(intString[0])]}Dollars`;


  // Milllions, Thousands, and Hundreds
  if (intLength === 7) {
    return dollarsToText(Number(intString.slice(1)), `${str + textByPositions.ones[Number(intString[0])]}Million`);
  }
  if (intLength === 4) {
    return dollarsToText(Number(intString.slice(1)), `${str + textByPositions.ones[Number(intString[0])]}Thousand`);
  }
  if (intLength % 3 === 0) {
    return dollarsToText(Number(intString.slice(1)), `${str + textByPositions.ones[Number(intString[0])]}Hundred`);
  }

  // Tens and Teens
  if (intLength % 2 === 0 && intString[0] === '1') {
    str += textByPositions.teens[Number(intString[1])];
    if (intLength === 2) return `${str}Dollars`;
  } else if (intLength % 2 === 0) {
    str += textByPositions.tens[Number(intString[0]) - 1];
  }

  return dollarsToText(Number(intString.slice(1)), str);
};

module.exports = { dollarsToText, maxRangeSum };
