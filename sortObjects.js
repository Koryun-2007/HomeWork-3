function sortObjects(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}

const objectsArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
];

console.log(sortObjects(objectsArray, "age"));
console.log(sortObjects(objectsArray, "name"));
