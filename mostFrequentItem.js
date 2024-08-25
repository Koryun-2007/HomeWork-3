function mostFrequentItem(arr) {
    const frequencyMap = {};

    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    let mostFrequent = null;
    let maxCount = 0;

    for (const item in frequencyMap) {
        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
}

console.log(mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

