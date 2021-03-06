function bubbleSort(arr) {
  const length = arr.length;

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      if (arr[y] > arr[y + 1]) {
        const temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([6, 5, 8, 1, 2, 4, 3]));
