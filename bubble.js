function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      // If no swaps occurred, array is already sorted
      if (!swapped) break;
    }
    return arr;
  }
module.exports = bubbleSort;