// to separete the element like https,www,youtube,com
let  a  = "https://www.youtube.com"
let b = a.split(".")

let c = b[0]
let d = c .split("://")

let first  = d[0]
console.log(first)

let sec = d[1]
console.log(sec)

console.log(b[1])
console.log(b[2])

console.log(first,"," + sec,"," + b[1],","+ b[2]);

// console.log(
//   "====================================================================================="
// );

// let arr = [1,2,3,4,5,6] // output 4,5,6,1,2,3
// let firstDiv = arr.slice(3) //n-1
// let secDiv  = arr.slice(0,3)
// let merge = firstDiv .concat(secDiv)
// console.log(merge)

console.log(
  "====================================================================================="
);
let num = 123456;
empty = [];
// 2,1,4,3,6,5 out

for (i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    let t1 = parseInt(num[i] - 1);
    // empty.push(t1);
  } else if (num[i] % 2 == 1) {
    let t2 = parseInt(num[i]) + 1;
    // empty.push (t2);
  }
}
console.log(empty);

console.log(
  "====================================================================================="
);

// to separate the string in more than two vowel
// let f2 = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
// ];
// let f4 = ["a", "e", "i", "o", "u"];
// emp = [];
// // f2.forEach((ele) => {
// for (i = 0; i < f2.length; i++) {
//   let a = f2[i]
//   console.log(a);
//   var sum = 0;
//   for (j = 0; j < a.length; j++) {
//     if (f4.includes(a[j])) {
//       sum++;
//     }
//   }
//   if (sum > 1) {
//     emp.push(a);
//   }
// }
// // });
// console.log(emp);

console.log(
  "====================================================================================="
);
// for (i = 1; i <= 200; i++) {
//   if (i % 8 == 0) {
//     // if ( i% 8 )
//     console.log(i);
//   }
// }

console.log(
  "====================================================================================="
);

//Asending order of two concat array
// let a1 = [23, 22, 10, 1, 46, 2, 9, 5, 3, 6];
// let a2 = [89, 65, 8, 4, 45, 46, 25, 23, 47];
// let a3 = a1.concat(a2);
// let a4 = a3.sort((f, g) => {
//   return f - g;
// });
// console.log(a4);

console.log(
  "====================================================================================="
);
// separete the vowel letter in the input

// var Vowel='aeiouAEIOU'
// var nameInput=prompt()
// var vowelLetter=0;
// for(i=0;i<nameInput.length;  i++){
//     for(j = 0; j < Vowel.length; j++){
// if(nameInput[i]==Vowel[j]){
//     console.log( "Vowel letter :" , nameInput[i]);
//     vowelLetter++
// }
//     }
// }
// console.log("Input :" ,nameInput)
// console.log("Sum of vowel letter in your input : " ,vowelLetter)
// // var splitInput=nameInput.split('')
// // console.log(splitInput);

console.log(
  "====================================================================================="
);

// var a=[1,2,3,5,4]
//  for(i=0;i<a.length ;i++){

//     for(j=i+1;j<a.length;j++){

//       console.log('*');

//     }
//  }

console.log(
  "====================================================================================="
);

// to separete the email id number and name like selvamplkm and 6

// var mail = "selvamplkm123@gmail.com";
// var number = "";
// var letters = "";
// for (i = 0; i < mail.length; i++) {
//   if (mail[i] == "@") {
//     // console.log('i' ,i);
//     for (j = 0; j < i; j++) {
//       //   if(a[j] > 0 || a[j]<  9) {
//       if (mail[j] <= 9) {
//         number = number + mail[j];
//       } else {
//         letters = letters + mail[j];
//       }
//     }
//   }
// }
// console.log("Number :", number);
// console.log("Letters :" , letters);

console.log(
  "====================================================================================="
);

//   var c="ffffnnnnkssssshhhh";
// var co=1
// var emp=[]
// for(i=0;i<c.length;i++){
//   if(c[i]==c[i+1])
//   {
//     co++

//   }
//   else{
//     if(co==1){
//         emp.push(c[i])
//     }
//     else{
//     var a=c[i]+co
//     console.log(a)
//     emp.push(a)
//     co=1;
//     }
//   }
// }
// console.log(emp)
