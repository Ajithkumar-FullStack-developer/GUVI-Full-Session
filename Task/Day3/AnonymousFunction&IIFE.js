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
