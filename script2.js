// let input = "selvamplkm111@gmail.com"
// let a = input.split("@")
// let b = a[0]
// let c = "aeiou"

// console.log(b);
// for(i = 0 ; i<b.length ;i++){
//     for(j=0 ;j<c.length ; j++){
//         if (b[i] == c[j]){
//             // console.log(b[i]);
//             break;
//         }
//         else{
//             console.log(b[i]);
//         }

//     }
// }

// let  a  = Math.floor(Math.random()*100)
// console.log(a)


// let a = ["one","two","three","four","five"];
// let emp =[]
// let sum = 0
// let vow = ["a" ,"e" ,"i" ,"o" ,"u"]
// for (let i = 0; i < a.length; i++) {
//     let element = a[i];
//     console.log(element);
//     for(let j= 0 ; j < element.length; j++){
//         console.log(element[j]);

//     }

// }



// input the number to convert the number in reveerse and print in the number in str
// input 123 output three  one

let a = 123
let b = a.toString()
let c = b.split("")
let d = c.reverse()

for(let i = 0 ; i<d.length ;i++){
    if (~~(d[i]) === 1){
        a2 = "one"
        console.log(a2);
    }
    else if (~~(d[i]) === 2){
         a2 = "two"
        console.log(a2);
    }
    else if (~~(d[i]) === 3){
         a2 = "three"
        console.log(a2);
    } else if (~~(d[i]) === 4){
         a2 = "four"
        console.log(a2);
    } else if (~~(d[i]) === 5){
         a2 = "five"
        console.log(a2);
    } else if (~~(d[i]) === 6){
        a2 = "six"
        console.log(a2);
    } else if (~~(d[i]) === 7){
         a2 = "seven"
        console.log(a2);
    } else if (~~(d[i]) === 8){
        a2 = "eight"
        console.log(a2);
    } else if (~~(d[i]) === 9){
         a2 = "nine"
        console.log(a2);
    } else if (~~(d[i]) === 0){
         a2 = "zero"
        console.log(a2);
    }

}
