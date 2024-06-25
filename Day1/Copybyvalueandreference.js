/**
 * 1. Array is a datatype
 * 2. Array stores element in contigious memory locstion
 * 3. Array has different properties
 *      1. Index - position of every element inside the array
 *      2. Element - Every data in the array is mentioned as an elemenrt
 *      3. Length - the number of element inside the array
 *      4. protottypal chain -will have the collection of all the properties and menber function available in the array
 */

var scores = [1, 2, 3, 4, 5];
var scoresDuplicate = scores;
scores.push(6);
console.log(scores, scoresDuplicate);
