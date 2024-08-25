function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    
    return arr2.filter(item => set1.has(item));
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
