/**
 * XMLHttpRequest
 */

var todosAPI = "https://jsonplaceholder.typicode.com/todos/";

var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
    console.log(this.response);
}

todoRequest.open("GET", todosAPI);
todoRequest.send();
console.log(todoRequest);