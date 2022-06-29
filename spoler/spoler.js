// создать инпут и кнопку при нажатии на кнопку текст пропобаед
// const form = document.forms.superform;
// form.addEventListener("submit", (e) =>{
// e.preventDefault();
// form.element.input.myinput = " ";
// }
// );

// const first = document.querySelector('input[name ="first"]');
// const second = document.querySelector('input[name ="second"]');
// const button = document.querySelector('button');
// const p = document.querySelector('p')
// const checkbox = document.querySelector('input[name ="chek"]')
// button.addEventListener('click', (e) =>{
//     p.textContent =  Number(first.value) + Number(second.value);
//     if (checkbox.checked ){
//         p.textContent =  Number(first.value) - Number(second.value);
//     }
// });
// console.log(first, second, checkbox );

const img = document.body.querySelector('input[name="img"]');
const button = document.body.querySelector('button');
const ul =  document.body.querySelector('ul')
button.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.textContent = img.value;
    ul.append(li)
    img.value = '';
    li.addEventListener('click',  (t) => {
        li.style.color = 'red'
    })

})
