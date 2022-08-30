//to check odd or even number in the input value
let input = parseInt(prompt("Ente the number"));
let even = 0;
let odd = 0;
let b = input.toString();
let c = b.split("");
console.log(c);
for (let i = 0; i < c.length; i++) {
  if (c[i] % 2 == 0) {
    even = even+ parseInt(c[i]);
  } else {
    odd = odd + parseInt(c[i]);
  }
}
console.log(even, "even");
console.log(odd, "odd");
