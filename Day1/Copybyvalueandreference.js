/**
 * 1. Array is a datatype
 * 2. Array stores element in contigious memory locstion
 * 3. Array has different properties
 *      1. Index - position of every element inside the array
 *      2. Element - Every data in the array is mentioned as an elemenrt
 *      3. Length - the number of element inside the array
 *      4. protottypal chain -will have the collection of all the properties and menber function available in the array
 */
/**
***hear using non-primities data type***
var scores = [1, 2, 3, 4, 5];
var scoresDuplicate = scores;
scores.push(6);
console.log(scores, scoresDuplicate);


***hear using primities data type**
var age = 20;
age +=2;
console.log(age);


*****
* Object is a datatype in javascript
* its store the values in key values pairs
* we can access the values in DOT or ['']
* it is a non-primitive data type

var data = {
name: "kumar",
age: 27, 
};
var datacopy = data;
console.log(datacopy);

***after update the age code is 
var data = {
name: "kumar",
age: 27, 
};
var datacopy = data;
data.age = 29;
console.log(datacopy, data);



*/
