// const ul = document.createElement('ul');
// document.body.prepend(ul);
// for (let i = 1; i<100; i++){
//     const li = document.createElement('li');
//     li.textContent = 'item' + i;
//     ul.append(li);
// };

// const art = document.createElement('article');
// document.body.prepend(art);
// const h = document.createElement('h3');
// art.prepend(h);
// const p = document.createElement('p');
// art.prepend(p);
// const ol = document.createElement('ol');
// art.prepend(ol);
// //for (let i = 1; i<2; i++){
// //     const li = document.createElement('li');
// //     li.textContent = 'item';
// //     ul.append(li);
// // }; // можно так что бы не плодить const
// const li = document.createElement('li');
// ol.prepend(li);
// li.textContent = 'title';
// const lim = document.createElement('li');
// ol.prepend(lim);
// lim.textContent = 'content';
// const foot = document.createElement('footer');
// art.append(foot);
// const a = document.createElement('a');
// foot.prepend(a);
// a.textContent = 'author';
// a.href = 'google.com'
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const ul = document.createElement('ul');
        document.body.prepend(ul);
        data.forEach(t => {
            const li = document.createElement('li');
            // li.textContent = t.title;
            ul.append(li);
            const span = document.createElement('span');
            span.textContent = t.id;
            li.append(span);
            const p = document.createElement('p');
            p.textContent = t.title;
            span.append(p);
            const input = document.createElement('input');
            p.append(input);
            input.type = "checkbox";
            input.checked = t.completed

        });

        const timer = setInterval(() => {
            if(ul.children.length > 0){

                const index = Math.floor(Math.random()*ul.children.length);
                ul.children.item(index).remove();

            }else{
                clearInterval(timer)
            }
            
        }, 100);

        // console.log(li);


    })