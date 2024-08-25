function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    let average = sum / numbers.length;
    return average;
}

// Examples
console.log(findAverage([10, 20, 30, 40, 50])); 
