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

// to separate name
let a1 = "mari/selvam@gmail.com" ;
let a2 = a1.split("/")
let a3 = a2[0]
let a4= a2[1]
let a5 = a4.split("@")
let a6 = a5[0]
console.log(a3,"," , a6);