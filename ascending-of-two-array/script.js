//Asending order of two concat array

let a1 = [23, 22, 10, 1, 46, 2, 9, 5, 3, 6];
let a2 = [89, 65, 8, 4, 45, 46, 25, 23, 47];
let a3 = a1.concat(a2);
let a4 = a3.sort((f, g) => {
  return f - g;
});
console.log(a4);


//array
// let arr = [1,2,3,4,5,6] // output 4,5,6,1,2,3
// let firstDiv = arr.slice(3) //n-1
// let secDiv  = arr.slice(0,3)
// let merge = firstDiv .concat(secDiv)
// console.log(merge)