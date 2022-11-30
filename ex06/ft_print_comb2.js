let numbers = [0,1,2,3,4,5,6,7,8,9]


function comb(){

let tab = []
let i = 0
let j = 0
let k = 0
let l = 0

while (i < numbers.length) {
    j = 0
    while (j < numbers.length) {
        k = 0
        while (k < numbers.length) {
            l = 0
            while (l < numbers.length) {
                if (numbers[i] + '' + numbers[j] < numbers[k] + '' + numbers[l]) {
                    tab.push(numbers[i] + "" + numbers[j] + " " + numbers[k] + "" + numbers[l])
                }
                l++
            }
            k++
        }
        j++
    }
    i++
}
let result = tab.join(', ')
return result
}

console.log(comb())