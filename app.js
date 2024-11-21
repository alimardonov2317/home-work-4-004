// 1-Masala
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
{
    function squareSum(numbers) {
        return numbers.map(num => num * num).reduce((sum, num) => sum + num, 0);
    }

    console.log(squareSum([1, 2, 2]))
}

// 2-Masala
// Given an array of integers your solution should find the smallest integer.
{
    function findSmallestInt(arr) {
        return Math.min(...arr);
    }

    console.log(findSmallestInt([86, 57, 13, 6]));
    console.log(findSmallestInt([65, -897, 7, -1]));
}

// 3-Masala
// We need a function that can transform a string into a number. What ways of achieving this do you know?
{
    const stringToNumber = function (str) {
        return Number(str);
    }

    console.log(stringToNumber("766"));
    console.log(stringToNumber("-766"));

}

// 4-Masala
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
{
    var summation = function (num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }

    console.log(summation(2));
    console.log(summation(8));

}

// 4-Masala
// Make a simple function called greet that returns the most-famous "hello world!".
{
    function greet() {
        return "hello world!";
    }

    console.log(greet());

}

// 5-Masala
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
{
    function countSheeps(sheep) {
        return sheep.filter(Boolean).length;
    }

    console.log(countSheeps([true, true, true, false, true, false, true, true]));
    console.log(countSheeps([true, false, false, true, false, true]));
    console.log(countSheeps([false, false, false, false]));
}

// 6-Masala
// Write a function that removes the spaces from the string, then return the resultant string.
{
    function noSpace(x) {
        return x.replace(/\s+/g, '');
    }

    console.log(noSpace("Hello world! How are you?"));
    console.log(noSpace("  Remove all  spaces  "));
}

// 7-Masala
// Code as fast as you can! You need to double the integer and return it.
{
    function doubleInteger(i) {
        return i * 2;
    }

    console.log(doubleInteger(2));
    console.log(doubleInteger(5));
    console.log(doubleInteger(10));
}

// 8-Masala
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
{
    function greet(name) {
        return `Hello, ${name} how are you doing today?`;
    }

    console.log(greet("Samandar"));
    console.log(greet("Alimardonov"));

}

// 9-Masala
// Implement a function which convert the given boolean value into its string representation.
{
    function booleanToString(b) {
        return b.toString();
    }
    
    console.log(booleanToString(true));
    console.log(booleanToString(false)); 
}