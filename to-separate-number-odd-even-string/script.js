// to separete the number and add
let input = "res13kk4562"
let add = 0
let h1 = input.split("")
for (let i = 0 ; i< h1.length ; i++){
   if (h1[i]> 0 || h1[i] <9){
    console.log(h1[i])
    let h2 = parseInt(h1[i])
  add = add+ h2
   }
}
console.log(add);


// to separete the email id number and name like selvamplkm and 6

var mail = "selvamplkm123@gmail.com";
var number = "";
var letters = "";
for (i = 0; i < mail.length; i++) {
  if (mail[i] == "@") {
    for (j = 0; j < i; j++) {
      //   if(a[j] > 0 || a[j]<  9) {
      if (mail[j] <= 9) {
        number = number + mail[j];
      } else {
        letters = letters + mail[j];
      }
    }
  }
}
console.log("Number :", number);
console.log("Letters :" , letters);
