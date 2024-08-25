function generateFibonacci(max) {
    let fibSequence = [0, 1];
    
    while (true) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        
        if (nextFib > max) {
            break; 
        }
        
        fibSequence.push(nextFib);
    }
    
    return fibSequence;
}

console.log(generateFibonacci(15)); 