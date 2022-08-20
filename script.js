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


  var c="ffffnnnnkssssshhhh";
var co=1
var emp=[]
for(i=0;i<c.length;i++){
  if(c[i]==c[i+1])
  {
    co++
    
  }
  else{
    if(co==1){
        emp.push(c[i])
    }
    else{
    var a=c[i]+co
    console.log(a)
    emp.push(a)
    co=1;
    }
  }
}
console.log(emp)