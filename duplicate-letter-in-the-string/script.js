// to remove duplicate letter from the str
var str = 'mariselvam';
for(i = 0;i < str.length;i++){
    var a = 0;
    for(j = 0;j < str.length;j++){
        if(str[i]==str[j]){
          a++
        }
    }
    if(a == 1){
        console.log(str[i])
    }
}