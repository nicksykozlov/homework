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

// const img = document.body.querySelector('input[name="img"]');
// const button = document.body.querySelector('button');
// const ul =  document.body.querySelector('ul')
// button.addEventListener('click', (e) => {
//     const li = document.createElement('li');
//     li.textContent = img.value;
//     ul.append(li)
//     img.value = '';
//     li.addEventListener('click',  (t) => {
//         li.style.color = 'red'
//     })

// })

// let form = document.forms[0];

//       let ageElems = form.elements;

//       console.log(ageElems); // [object HTMLInputElement]

// <input name="login">

// let fieldset = form.elements.userFields;
// alert(form.elements.login);
// alert(fieldset); // HTMLFieldSetElement

// // мы можем достать элемент по имени как из формы, так и из fieldset с ним
// alert(fieldset.elements.login == form.elements.login); // true

//     let selected = Array.from(select.options)
//     .filter(option => option.selected)
//     .map(option => option.value);

//   console.log(selected);// blues,rock
//   option = new Option(привет, name, defaultSelected, selected);

//Выведите значение и текст выбранного пункта.
//Добавьте пункт: <option value="classic">Классика</option>.
//Сделайте его выбранным.
// let selected = genres.options[genres.selectedIndex];
// console.log(selected.value);

// let form = document.forms.super;
// let elem = form.elements.age;
// console.log(elem);

// console.log(select.option);
// function btnClick()
//         {
//             var Txt1 = "";
//             var Txt2 = "";
//             Txt1 = document.Test.bt.value;
//             Txt2 = document.Test.bt.name;
//             document.getElementById('ex1').innerHTML="<HR>"+
//                 "Вы нажали кнопку: " + Txt1.bold() +
//                 " с именем: "  + Txt2.bold() +"<HR>";
//         }
