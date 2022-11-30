// console.log ('abcdefghijklmnopqrstuvwxyz') 
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
function alphabet (tab) {
    let tableau = tab
    let string = tableau.toString().toLowerCase()
    let result = string.split(",")
    result = result.join("")
    return result;
}
console.log (alphabet(letters))
