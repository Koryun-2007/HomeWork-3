function toTitleCase(str) {
    const words = str.split(' ');

    const titleCasedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return titleCasedWords.join(' ');
}

console.log(toTitleCase("hello world")); 
