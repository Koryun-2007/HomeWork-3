function countVowels(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    const vowels = "aeiou";
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}
console.log(countVowels("Hello World")); 
console.log(countVowels("OpenAI"));      
