// to separate the string in more than two vowel
let f2 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let f4 = ["a", "e", "i", "o", "u"];
emp = [];
for (i = 0; i < f2.length; i++) {
  let a = f2[i]
  console.log(a);
  var sum = 0;
  for (j = 0; j < a.length; j++) {
    if (f4.includes(a[j])) {
      sum++;
    }
  }
  if (sum > 1) {
    emp.push(a);
  }
}
console.log(emp);


// separete the vowel letter in the input

var Vowel='aeiouAEIOU'
var nameInput=prompt()
var vowelLetter=0;
for(i=0;i<nameInput.length;  i++){
    for(j = 0; j < Vowel.length; j++){
if(nameInput[i]==Vowel[j]){
    console.log( "Vowel letter :" , nameInput[i]);
    vowelLetter++
}
    }
}
console.log("Input :" ,nameInput)
console.log("Sum of vowel letter in your input : " ,vowelLetter)
// var splitInput=nameInput.split('')
// console.log(splitInput);


//// to compare  two str .. print the maximum of the vowel in the the str
let a = "mariselvam" ;
let b = "hello"
let c = ""
let d =""

let vowels =["a","e","i","o" ,"u"]
for(let i = 0 ; i<a.length ; i++){
    if (a[i] === ("a") ||a[i] === ("e") ||a[i] === ("i") ||a[i] === ("o") ||a[i] === ("u") ){
        console.log( c = c+a[i]);
    }
}

for(let j = 0 ; j<b.length ; j++){
    if (a[j] === ("a") ||a[j] === ("e") ||a[j] === ("i") ||a[j] === ("o") ||a[j] === ("u") ){
        console.log(d = d+b[j]);
    }
}

if (c.length > d.length){
    console.log("c is greater");
}
else {
    console.log("d id greater");
}