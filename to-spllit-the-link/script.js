// to separete the element like https,www,youtube,com
let a = "https://www.youtube.com";
let b = a.split(".");

let c = b[0];
let d = c.split("://");

let first = d[0];
console.log(first);

let sec = d[1];
console.log(sec);

console.log(b[1]);
console.log(b[2]);

console.log(first, "," + sec, "," + b[1], "," + b[2]);