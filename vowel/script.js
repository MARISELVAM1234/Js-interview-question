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
