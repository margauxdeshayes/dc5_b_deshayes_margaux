function isNegative(n){
    var number = n;
    if(number >= 0){
        return "P";
    } else {
        return "N";
    }
}

console.log(isNegative(-5));