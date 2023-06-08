function pivotHelper(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };

  const pivot = arr[start];
  let swapIndx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }
  }
  swap(arr, start, swapIndx);
  return swapIndx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const sampleArr = [3, 10, 2, 1, 99, 7, 14];
const result = quickSort(sampleArr);
console.log(result);
