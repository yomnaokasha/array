function betterThanAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let aver = sum / arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > aver) {
      count++;
    }
  }
  return count;
}

let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
