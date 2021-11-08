let numbers = [];

for (i = 1; i <= 25; i += 1) {
    numbers.push(i);
}

for (let number of numbers) {
    console.log(number / 2);
}
