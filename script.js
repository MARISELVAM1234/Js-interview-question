// to separete the element like https,www,youtube,com
let  a  = "https://www.youtube.com"
let b = a.split(".")

let c = b[0]
let d = c .split(":")

let w = c.split("//")

let first  = d[0]
console.log(first)

let sec = w[1]
console.log(sec)

console.log(b[1])
console.log(b[2])

console.log(
  "====================================================================================="
);

// let arr = [1,2,3,4,5,6] // output 4,5,6,1,2,3
// let firstDiv = arr.slice(3,7)
// let secDiv  = arr.slice(0,3)
// let merge = firstDiv .concat(secDiv)
// console.log(merge)

console.log(
  "====================================================================================="
);
let num = "1,2,3,4,5,6";
// 2,1,4,3,6, 5 out

for (i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i] -1);
  }
  else if( num[i] % 1 ==0) {
    console.log (parseInt(num[i] + 1));
  }
}

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
