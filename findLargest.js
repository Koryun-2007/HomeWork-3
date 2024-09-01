function findLargest(array){
    let bigNum = array[1]
    for(let i = 0; i <array.length; i++){
        if(bigNum < array[i]){
            bigNum = array[i]
        }
    }
    return bigNum
}
console.log(findLargest([1, 3, 5, 7, 9])); // Output: 9);

