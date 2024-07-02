const prompt = require('prompt-sync')();
let testScores = [12, 4, 23, 60, 4, 12, 17, 80, 90, 3]
function displayNumAbove70(numbers) {
    return numbers.filter((number) => {
        return number >= 70;
    });
}

let examGrades = [85, 92, 78, 88, 95]
function addExamGradesBy5(numbers) {
    return numbers.map((number) => {
        return number + 5;
    });
}

let scores = [2, 4, 6, 8, 10]
function squareNumbers(numbers) {
    return numbers.map((number) => {
        return number ** 2;
    });
}

let members = ["Emily", "Jack", "Sophia",  "Daniel"]
let books = ["Book of life", "chem book", "Phy book", "Math book"]
function printObject(mem, book) {
    let index = 0;
    for (let element of mem) {
        mem[element] = book[index]
        index = index + 1;
    }
    return mem;
}

let classTiming = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
function checkClassTime(times) {
    return classTiming.filter((time) => {
        return time.slice(-2) === "PM";
    });
}

let expenses = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
}
function totalExpenses(cost) {
    let totalAmountSpent = 0;
    for (let index in cost) {
        totalAmountSpent += cost[index];
    }
    return totalAmountSpent;
}

module.exports = {displayNumAbove70, addExamGradesBy5, squareNumbers, printObject};