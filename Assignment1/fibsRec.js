function fibsRec(num) {
    if(num <= -1)   
        return "Negative numbers are not allowed";

    if (num <= 1) 
        return [0];

    if (num === 2) 
        return [0, 1];

    const prev = fibsRec(num - 1);

    return [].concat(prev, prev[prev.length - 1] + prev[prev.length - 2]);
}

console.log(fibsRec(-2)); // returns "Negative numbers are not allowed"
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]