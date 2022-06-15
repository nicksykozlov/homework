// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     // пишем отсюда 
//     const title = data.filter(item => item.title.length < 15);
//     console.log(title);
//     const short = data.map(item => {
//         if (item.title.length > 15){
//             item.title = item.title.slice(0,12) + "...";
//         }
//         return item;
//     })
//     console.log(short);

// })

// .catch(e => {
//     console.error(e);
// })



fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // пишем отсюда 
        const email = data.map(t => t.name + ":" + "  " + t.email);
        console.log(email);

        const domen = email.map(email => email.split('@').pop().split(".").shift());
        console.log(domen);

        const num = data.map(tel => tel.phone);
        console.log(num);

        const sum = num.map(user => ({}))
        console.log(sum);




    })

    .catch(e => {
        console.error(e);
    })