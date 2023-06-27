
function sumAll(arr) {
   let newArr = arr.sort((a, b) => a - b);
   let sum = 0;
   for(let i = arr[0]; i <= newArr[1]; i++) {
      sum += i;
   }
   return sum;
 }
 
 console.log(sumAll([1, 4]));