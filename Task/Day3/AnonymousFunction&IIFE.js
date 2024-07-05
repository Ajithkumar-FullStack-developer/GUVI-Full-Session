/**
Anonymous Function & IIFE
1.Print odd numbers in an array
*/
//Anonymous Funtion

var printOddNumbers = function(v1)
{
    v1.forEach(function(v2)
    {
        if (v2 % 2 !== 0)
            {
            console.log(v2);
        }
    });
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(numbers);

//Immediately Invoked Function Expression

(function(arr)
{
    arr.forEach(function(num)
    {
        if (num % 2 !== 0)
            {
            console.log(num);
        }
    });
})
([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
Anonymous Function & IIFE
2. Convert all the strings to title caps in a string array
*/
//Anonymous Funtion

const lowerToUpper = function(arr)
{
    const result = [];
    for (let i = 0; i < arr.length; i++)
        {
        const words = arr[i].toLowerCase().split(' ');
        for (let j = 0; j < words.length; j++)
        {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        result.push(words.join(' '));
    }
    return result;
};

const strings = ["welcome to guvi", "hello student", "programmer"];
const stringTitleCase = lowerToUpper(strings);
console.log(stringTitleCase);

//Immediately Invoked Function Expression

const textTitleCase = (function(arr)
{
    const result = [];
    for (let i = 0; i < arr.length; i++)
        {
        const words = arr[i].toLowerCase().split(' ');
        for (let j = 0; j < words.length; j++)
            {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        result.push(words.join(' '));
    }
    return result;
})(["welcome to guvi", "hello student", "programmer"]);

console.log(textTitleCase);

/**
Anonymous Function & IIFE
3. Sum of all numbers in an array
*/
//Anonymous Funtiona

let sumArray = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

