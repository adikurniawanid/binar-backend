const arr = [1, 2, 5, 1, 6, 7, 2, 3, 7, 2, 2, 2, 8, 10, 12];
const result = [];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

insertionSort(arr);
for (let index = 1; index < arr.length; index++) {
  if (arr[index] !== result[result.length - 1]) {
    result.push(arr[index]);
  }
}
console.log(result);
