// console.log('zyxwvutsrqponmlkjihgfedcba')
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function reverseAlphabet (tab) {
    let tableau = tab
    let string = tableau.toString().toLowerCase()
    let split = string.split(",")
    let reverse = split.reverse()
    let join = reverse.join("")
    return join
}
console.log (reverseAlphabet(letters))
