"use strict";
function mergeTwoSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
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
const final = mergeTwoSortedArrays([1, 10, 50], [2, 14, 80, 70, 99]);
console.log(final);
function divide(arrParam) {
    let mid = Math.floor(arrParam.length / 2);
    let leftHalf = arrParam.slice(0, mid);
    let rightHalf = arrParam.slice(mid);
    const chunks = [];
    while (arrParam.length) {
        chunks.push(arrParam.splice(0, 1));
    }
    if (arrParam.length <= 1) {
        return arrParam;
    }
    else {
        divide(arrParam);
    }
    return chunks;
}
const divided = divide([1, 2, 3]);
console.info(divided);
//# sourceMappingURL=merge-sort.js.map