// function fibonacciArray(n) {
//   var fibArr = [0, 1];

//   for (let i = 2; i < n; i++) {
//     const value = fibArr[i - 1] + fibArr[i - 2];
//     fibArr.push(value);
//   }

//   return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result);

function fibonacciArray(n) {
  let fibarry = [0, 1];
  for (let i = 2; i < n; i++) {
    let value = fibarry[i - 1] + fibarry[i - 2];
    fibarry.push(value);
  }

  return fibarry;
}
result = fibonacciArray(10);
console.log(result);
