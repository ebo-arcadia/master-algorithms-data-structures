"use strict";
// write pseudocode
// iterate the array from the end towards the start
// start an inner loop with a variable called j from the beginning to i-1
// if arr[j] is greater than arr[j+1], swap the two
// to swap,
// store arr[j] in an temporary variable,
// assign arr[j] to arr[j+1],
// then assign arr[j+1] to the temporary variable
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(arr) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    };
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.info(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
console.info(bubbleSort([32, 5, 11, 7, 1, -5]));
console.warn('-----optimized solution--------');
console.info(bubbleSort([8, 1, 2, 3, 4, 5]));
console.warn('-----test runtime--------');
// let mock = Array.apply(null, {length: 10000}: any).map(Function.call, Math.random);
// bubbleSort(mock);
//# sourceMappingURL=bubble-sort.js.map