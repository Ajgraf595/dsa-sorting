/**
 * Quick Sort (non-mutating)
 * Time:  O(n log n) average, O(n^2) worst
 * Space: O(n)
 * Stable: No
 *
 * @param {number[]} arr
 * @returns {number[]} new sorted array (ascending)
 */
function quickSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError('quickSort expects an array');
    if (arr.length <= 1) return arr.slice();
  
    const [pivot, ...rest] = arr;
    const left = rest.filter(x => x < pivot);
    const right = rest.filter(x => x >= pivot);
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  module.exports = quickSort;
  