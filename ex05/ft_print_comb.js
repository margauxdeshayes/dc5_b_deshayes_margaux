let numbers = [0,1,2,3,4,5,6,7,8,9]

function printComb () {
let i = 0
let j = 0
let K = 0
let tab = []
while (i <10) {
    j = i + 1
    while (j <10) {
        k = j + 1
        while (k <10) {
            tab.push(numbers[i]+''+numbers[j]+''+numbers[k])
            k++
            }
            j++
        }
        i++
    }
    let result = tab.join()
    return result
}
console.log (printComb())