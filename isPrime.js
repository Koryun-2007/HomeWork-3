function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num < 4 ){
        return true
    }
    for (let i = 2; i * i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(22));  