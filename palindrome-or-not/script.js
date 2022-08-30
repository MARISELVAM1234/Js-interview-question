let input = "amma";
let changeType = input.toString();
let sp = changeType.split("");
console.log(sp);
let rev = sp.reverse();
let merge = rev.join("");
if (merge == input) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}