/**
 * Selection Sort (non-mutating)
 * Time:  O(n^2)
 * Space: O(n) here because we copy input (classic in-place is O(1))
 * Stable: No
 *
 * @param {number[]} arr
 * @returns {number[]} a new sorted array (ascending)
 */
function selectionSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError('selectionSort expects an array');
    const a = arr.slice(); // do not mutate caller's array
  
    for (let i = 0; i < a.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[minIdx]) minIdx = j;
      }
      if (minIdx !== i) {
        const tmp = a[i];
        a[i] = a[minIdx];
        a[minIdx] = tmp;
      }
    }
  
    return a;
  }
  
  module.exports = selectionSort;
  