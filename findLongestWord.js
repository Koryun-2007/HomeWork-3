function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Test cases
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"))