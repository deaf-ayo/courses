function mapForEach(arr, fn) {
  let newArr =  [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    );
  }
  return newArr
}


let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = mapForEach(arr1, item => item * 2);
console.log(arr2);

let arr3 = mapForEach(arr1, item => item > 2);
console.log(arr3);

let checkPastLimit = (limiter, item) => item > limiter;
let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

let checkPastLimitSimple = limiter => item => item > limiter;
let arr5 = mapForEach(arr1, checkPastLimitSimple(0));
console.log(arr5);