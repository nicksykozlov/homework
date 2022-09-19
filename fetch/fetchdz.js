fetch('https://jsonplaceholder.typicode.com/todos')
.then(todos=>{
    console.log(todos);
    console.log(todos.text());
})