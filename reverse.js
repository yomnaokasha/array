function reverse(arr) {
  let j = 1;
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - j];
    arr[arr.length - i - 1] = temp;
    j++;
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e", "f"]);
console.log(result);
