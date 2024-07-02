const {displayNumAbove70, addExamGradesBy5, squareNumbers, checkClassTime, totalExpenses} = require('./RecapTask');

test('Recap Task 1', () => {
    let testScores = [12, 4, 23, 60, 4, 12, 17, 80, 90, 3]
    expect(displayNumAbove70(testScores)).toEqual([80, 90]);
})

test('Recap Task 2', () => {
    let examGrades = [85, 92, 78, 88, 95]
    expect(addExamGradesBy5(examGrades)).toEqual([90, 97, 83, 93, 100]);
})

test('Recap Task 3', () => {
    let scores = [2, 4, 6, 8, 10]
    expect(squareNumbers(scores)).toEqual([4, 16, 36, 64, 100]);
})

test("Recap Task 4", () => {
    let classTiming = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
    expect(checkClassTime(classTiming)).toEqual(["1:00 PM", "3:00 PM", "5:00 PM"])
})

test('Recap Task 5', () => {
    let expenses = {
        "groceries": 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    }
    expect(totalExpenses(expenses)).toEqual(380);
})