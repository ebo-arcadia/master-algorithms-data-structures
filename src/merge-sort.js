function mergeTwoSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arrParam) {
  if (arrParam.length <= 1) return arrParam;
  const mid = Math.floor(arrParam.length / 2);
  const left = mergeSort(arrParam.slice(0, mid));
  const right = mergeSort(arrParam.slice(mid));
  return mergeTwoSortedArrays(left, right);
}

const result = mergeSort([99, 14, 78, 2, 33]);
console.info(result);
