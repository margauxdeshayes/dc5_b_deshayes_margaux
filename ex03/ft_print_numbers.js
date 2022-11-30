// console.log ('0123456789')
let numbers = [0,1,2,3,4,5,6,7,8,9]

function sortingNumb (tab) {
    let tableau = tab
    let string = tableau.toString().toLowerCase()
    let split = string.split(",")
    let sort = split.sort()
    let join = sort.join("")
    return join
}
console.log (sortingNumb(numbers))