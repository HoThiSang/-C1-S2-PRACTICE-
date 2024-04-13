let numbers = [1, 2, 3, 4, 5];
// 1: Add an element at the end of the array
numbers.push(6)
console.log(numbers);

// 2: Loop on all array elements
numbers.map(e => console.log(e));

// 3: Access to the array element with its index
for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// 4: Remove an array element with its index
numbers.splice(1,1)
console.log(numbers);

// Filter array elements
const result1 =numbers.filter(e => e > 1)
console.log(result);

// Transform each array element by applying a function on them
const result2 = numbers.map(e => e *2);
console.log(result);