// prefix sums
let input = [4, 5, 6, 7];
let add = 0;
empty = [];
for (let i = 0; i < input.length; i++) {
  add = add + input[i];
  console.log(add);
  empty.push(add);
}
console.log(empty);