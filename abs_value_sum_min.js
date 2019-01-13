// return the median value of a sorted array
// if the array length is event, return the lower number of the two returned values

function main(number_array) {
    const isEven = number_array.length % 2 === 0;
    if (isEven) {
        return number_array[(number_array.length/2)-1];
    } else {
        return number_array[((number_array.length-1)/2)];
    }
}

console.log(main([2, 4, 7]));
[2, 4, 7, 6]
console.log(main([2, 4, 7, 6]));