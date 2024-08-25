function flattenArray(arr) {
    let result = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            item.forEach(flatten);
        } else {
            result.push(item);
        }
    }

    flatten(arr);

    return result;
}

console.log(flattenArray([[1, 2, [3]], [4, 5], [6]])); 
