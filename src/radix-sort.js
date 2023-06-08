// helper methods
function getDigit(num, place) {
  const digit = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  return digit;
}

function digitCount(num) {
  if (num === 0) return 1;
  const digit = Math.abs(num).toString().length;
  return digit;
  // alter solution per tutorial
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let currentMax = 0;
  for (const num of nums) {
    currentMax = Math.max(currentMax, digitCount(num));
  }
  return currentMax;
}

function RadixSort(listOfNums) {
  const maxDigitsCounts = mostDigits(listOfNums);
  for (let k = 0; k < maxDigitsCounts; k++) {
    const buckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < listOfNums.length; i++) {
      const digit = getDigit(listOfNums[i], k);
      buckets[digit].push(listOfNums[i]);
    }
    console.info('before', buckets);
    listOfNums = [].concat(...buckets);
    console.info('after', listOfNums);
  }
  return listOfNums;
}

RadixSort([789, 78, 67, 10, 31, 52222]);
