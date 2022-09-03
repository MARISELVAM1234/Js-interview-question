let str = "hello world"

//to display index value of a str 
console.log(str.charAt(0) ) 

//assci value of the element
console.log(str.charCodeAt(3));

// to display length of the str
console.log(str.length);

// to replace the str particular word
console.log(str.replace("world" ,"js"));

// to replace all the string word
let strin = "hello everyone , hello world , hello js"
console.log(strin.replaceAll("hello" , "hai"));

// to display index position of the str
console.log(str.indexOf("w"));

// to display  last index position of the str
console.log(str.lastIndexOf("l"))

// the str start with particular word (to return true or false)
console.log(str.startsWith("hello"));

// the str end with particular word (to return true or false)
console.log(str.endsWith("world"));

// to display all the word in capital letter
console.log(str.toUpperCase());

// to display all the word in small letter
let st = "HELLO"
console.log(st.toLowerCase());

// the word present to the variable (to return true or false)
console.log(str.includes("hello"));

// to repeat the word
console.log(str.repeat(6));

// to satisfy the condition to return the ele (to take st and end value in length)
console.log(str.substring(5 , 11));

// to merge the single str
console.log(str.concat( st));

//  to split the str and return in array
console.log(str.split(""));

//  to cut the needed value (to take index position)
console.log(str.slice(3 ,7));

// to take the value in length and fill the ele in start
let a = "hello"
console.log(a.padStart( 10 , "*"));

// to take the value in length and fill the ele in end
console.log(a.padEnd( 10 , "*"));

//  to compare two str and match the element.. to return the value in array 
let c = "hello"
console.log(str.match(c));

//
console.log(str.matchAll(c));
