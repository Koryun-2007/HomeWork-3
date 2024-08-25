function isPalindrome(str) {
    let cleanedStr = '';

    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            cleanedStr += char.toLowerCase();
        }
    }

    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
