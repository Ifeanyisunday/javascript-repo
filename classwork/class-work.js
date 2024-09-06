let input = [2, 3, 4, 5]
let base = 10 ** (input.length - 1)
let total = 0;
let newArr = []
for (let i = 0; i < input.length; i++) {
    total += input[i] * base
    base = base / 10
}

let str = ""
let overall = total + 1
str += overall
for (let j = 0; j < str.length; j++) {
    newArr[j] = Number(str.charAt(j))
}

console.log(newArr)