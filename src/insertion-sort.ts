// pseudocode
// start by taking the second element
// if the value is smaller than the left element value, swap
// continue to the next element, compare to the left portion sorted, swap if necessary

function insertionSort(arr: number[]) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j = j - 1;
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const data = [2, 1, 9, 5, 3, 6];
const insertSorted = insertionSort(data);
console.info(insertSorted);
