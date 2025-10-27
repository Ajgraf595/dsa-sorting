function insertionSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError('insertionSort expects an array');
    
    // Create a shallow copy so we don't mutate the input
    const a = arr.slice();
  
    for (let i = 1; i < a.length; i++) {
      const key = a[i];
      let j = i - 1;
  
      // Move elements greater than key to one position ahead
      while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j--;
      }
      a[j + 1] = key;
    }
  
    return a;
  }
  
  module.exports = insertionSort;
  