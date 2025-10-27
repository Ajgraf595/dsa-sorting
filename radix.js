/**
 * Radix Sort (for non-negative integers)
 * Time:  O(n * k)
 * Space: O(n)
 * Stable: Yes
 *
 * @param {number[]} arr
 * @returns {number[]} new sorted array
 */
function radixSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError('radixSort expects an array');
    if (arr.length <= 1) return arr.slice();
  
    // Make a shallow copy so we don't modify the original
    const a = arr.slice();
    const maxNum = Math.max(...a);
    let digit = 1;
  
    // Sort by each digit place
    while (Math.floor(maxNum / digit) > 0) {
      const buckets = Array.from({ length: 10 }, () => []);
      for (const num of a) {
        const digitVal = Math.floor((num / digit) % 10);
        buckets[digitVal].push(num);
      }
      a.splice(0, a.length, ...buckets.flat());
      digit *= 10;
    }
  
    return a;
  }
  
  module.exports = radixSort;
  