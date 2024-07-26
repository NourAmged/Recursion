function fibs(num) {
    const arr = [0, 1];
    let c = 0;

    if(num <= -1)
        return "Negative numbers are not allowed";

    if (num <= 2) {
        return arr.splice(0, num);
    }

    for (let i = 2; i < num; i++) {
        c = arr[i - 2] + arr[i - 1];
        arr.push(c);
    }
    return arr;
}

console.log(fibs(-2)); // returns "Negative numbers are not allowed"
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]