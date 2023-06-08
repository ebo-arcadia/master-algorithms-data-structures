"use strict";
// pseudocode
// store the 1st smallest element
// compare it to the next item in the given array till find a smaller number
// if a smaller number is found, designate it to the new minimum variable till the end of the array
// if the minimum is not the one index initially began with, swap
// repeat it with the next element till the array is sorted
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
function selectionSort(array) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    };
    for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            console.log(i, j);
            if (array[lowest] > array[j]) {
                lowest = j;
            }
        }
        if (i !== lowest)
            swap(array, lowest, i);
    }
    return array;
}
exports.selectionSort = selectionSort;
let sampleArray = [5, 1, 4, 3, 2];
let result = selectionSort(sampleArray);
console.log(result);
//# sourceMappingURL=selection-sort.js.map