let a = prompt("enter the input");
let d = 0;
let f1 = a.length;
for (let i = 0; i < f1; i++) {
  let e = (~~a[i]) ** f1;
  d += e;
}
if (d === ~~a) {
  console.log("input :", a);
  console.log("armstrong");
} else {
  console.log("not in armstrong");
}