
import './App.css';

function App() {



  const labels =  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  const data = [12, 19, 3, 5, 2, 3];

   
  console.log(labels);
  

  return (
    <div className="App">
     <div className='data'> 
      {data.map(e=><div key={e.id} width = {e.valueOf(e)}></div>)}
      </div>
      <div className='labels'>
      {labels.map(e=><div key={e.id}>{e.valueOf(e)}</div>)}
      </div>
     
    </div>
  );
}

export default App;




// // Получаем canvas элемент
// let canvas = document.getElementById('canvas'); 
 
// // Указываем элемент для 2D рисования
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
// ctx.lineWidth = 2.0; // Ширина линии
// ctx.beginPath(); // Запускает путь
// ctx.moveTo(30, 10); // Указываем начальный путь
// ctx.lineTo(30, 600); // Перемешаем указатель
// ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
// ctx.stroke(); // Делаем контур

// ctx.fillStyle = "black";
// // Цикл для отображения значений по Y 
// for(let i = 0; i < 6; i++) { 
//     ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
//     ctx.beginPath(); 
//     ctx.moveTo(25, i * 80 + 60); 
//     ctx.lineTo(30, i * 80 + 60); 
//     ctx.stroke(); 
// }
 
// // Массив с меткам месяцев
// let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']; 
 
// // Выводим меток
// for(var i=0; i<5; i++) { 
//     ctx.fillText(labels[i], 50+ i*100, 475); 
// }




//   return(
//     <div>
//       <canvas width="700" height="700" id="canvas"></canvas>
//     </div>
//   )
  