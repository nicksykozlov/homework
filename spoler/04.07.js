// let input = document.body.querySelector('input');
// let button = document.body.querySelector('button')
// let select = document.body.querySelector ('select')
// button.addEventListener('click', (e) =>{
//         select.selectedIndex = Number.parseInt(input.value) ;
                
//     });

// console.log(select);

// <!-- Дан селект со списком стран
// сделайте так что бы при выборе страны появлялся еще и селект
// со списков городов из этой строны -->
// const data = {
//     USA: ['NY', 'Wasington' ],
//     RB: ['Brest', 'Pinsk'],
//     Poland:['Terespol', 'Warshava']
// };
//  const mainSelect = document.createElement('select');
//  const secondSelect = document.createElement ('select');
//  document.body.append(mainSelect);
//  document.body.append(secondSelect);
//  secondSelect.hidden = true;
//  const countries = Object.keys(data);
//  countries.forEach(country => {
//     const option = new Option(country, country);
//     mainSelect.append(option)
//  })
//  mainSelect.addEventListener( 'change', () =>{
//     secondSelect.hiden = false;
//     secondSelect.innerHTML = "";
//     const country = mainSelect.value;
//     const cities = data[country];
//     cities.forEach(city => {
//         const option = new Option(city, city);
//         secondSelect.append(option);

//     }
//     )
//  })

// Создать таблицу в которой TR - это кдюч,
// td - значение

// var data = [
// 	{
// 		"name": "Hoyt Gillespie",
// 		"phone": "(488) 168-6855",
// 		"email": "cras@aol.net",
// 		"address": "372-1730 Mauris St.",
// 		"list": "11",
// 		"country": "Chile",
// 		"region": "Huádōng",
// 		"postalZip": "5445",
// 		"text": "at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum",
// 		"numberrange": "4",
// 		"currency": "$42.58",
// 		"alphanumeric": "ZQW56RTK3SJ"
// 	},
// 	{
// 		"name": "Valentine Petersen",
// 		"phone": "1-523-641-2718",
// 		"email": "non@google.com",
// 		"address": "590-4671 Cras St.",
// 		"list": "1",
// 		"country": "Australia",
// 		"region": "Luhansk oblast",
// 		"postalZip": "67132",
// 		"text": "a neque. Nullam ut nisi a odio semper cursus. Integer",
// 		"numberrange": "1",
// 		"currency": "$4.02",
// 		"alphanumeric": "CKH02JCS3TU"
// 	},
// 	{
// 		"name": "Hanna Gallegos",
// 		"phone": "(342) 345-8574",
// 		"email": "suspendisse.sagittis@aol.com",
// 		"address": "8157 Egestas St.",
// 		"list": "17",
// 		"country": "South Africa",
// 		"region": "Bremen",
// 		"postalZip": "330026",
// 		"text": "Nam interdum enim non nisi. Aenean eget metus. In nec",
// 		"numberrange": "1",
// 		"currency": "$85.06",
// 		"alphanumeric": "POG36WYF7NM"
// 	},
// 	{
// 		"name": "Lucas Hampton",
// 		"phone": "1-584-508-1259",
// 		"email": "dolor.dolor@aol.net",
// 		"address": "P.O. Box 738, 8629 Curabitur Rd.",
// 		"list": "19",
// 		"country": "New Zealand",
// 		"region": "Mecklenburg-Vorpommern",
// 		"postalZip": "51819",
// 		"text": "In mi pede, nonummy ut, molestie in, tempus eu, ligula.",
// 		"numberrange": "2",
// 		"currency": "$65.89",
// 		"alphanumeric": "DGQ56FXO5EQ"
// 	},
// 	{
// 		"name": "Ignatius Sharp",
// 		"phone": "(107) 500-1317",
// 		"email": "purus.in@google.ca",
// 		"address": "988-8644 Orci. Rd.",
// 		"list": "13",
// 		"country": "Spain",
// 		"region": "Zachodniopomorskie",
// 		"postalZip": "256616",
// 		"text": "eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed",
// 		"numberrange": "7",
// 		"currency": "$59.84",
// 		"alphanumeric": "WVR83ZGN1TF"
// 	}
// ];
// На странице расположено несколько форм 
// в них есть инпуты в инпутах чиcла 
// Дана кнопка 
// по нажатию на эту кнопку циклом переберите все формы на странице
// затем циклом переберите все инпуты в каждой форме и найдите сумму чисел всех инпутов
const numbers = [];
const forms = Array.from(documents.forms);

document.querySelector('button').addEventListener('click', ()=>{
    forms.forEach(form => {
        const inputs = Array.from(form.elements);
        numbers.push(...inputs.map(input => Number.parseInt(input.value)))
    });
    const summa = numbers.reduce((acc, n)=> acc+n, 0)
    alert(summa)
})
button.addEventListener()

