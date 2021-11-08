let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersX = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i == numbers.length - 1) {
        numbersX.push(numbers[i] * 2)
    } else {
        numbersX.push(numbers[i] * numbers[i + 1])        
    }
}

console.log(numbersX)