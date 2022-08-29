//Написать функцию, которая строит таблицу n - td (кол-во столбцов) на k - tr (кол-во строк),
//используя Javascript. В каждую ячийку записать текст типа 'n - k'.

// function createTable(n, k) {
//   let table = document.createElement("table");// создал таблицу
//   for (let i = 0; i < k; i++) {//цикл для созданаия строк
//     let tr = document.createElement("tr");//создал строку

//     for (let j = 0; j < n; j++) {//цикл для создание ячеек
//       let td = document.createElement("td");//создал ячейку
//       td.textContent = i + "-" + j; //заполнил ячеку контесктом
//       tr.prepend(td);//внутрь сторки закинул ячейку
//     }
//     table.border = `1px solid`; // граница таблицы
//     document.body.prepend(table); // в боди закинул таблицу
//     table.append(tr); // внутрь таблицы закинул строки
//   }
// }
// createTable(5, 9);

// таблица умножения

// function createTable() {
//   for (let i = 1; i <= 10; i++) {
//     //цикл для созданаия строк
//     let table = document.createElement("table"); // накаждой итерации создаю таблицу
//     for (let j = 1; j <= 10; j++) {
//       //цикл для создание ячеек
//       let tr = document.createElement("tr"); //создал строку

//       let td = document.createElement("td"); //создал ячейку
//       td = `${i} х ${j}= ${i * j}`; //заполнил ячеку контесктом
//       td.border = `1px solid`;
//       tr.append(td); //внутрь сторки закинул ячейку
//       table.append(tr); // в таблицу закнул строку
//     }
//     table.border = `1px solid`; // граница таблицы

//     document.body.append(table); // в боди закинул таблицу
//   }
// }
// createTable();

// ReactDOM.render(<table>
//   <tr >
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//   </tr>
//   <tr>
//     <td>1</td>
//   </tr>
//   <tr>
//     <td>1</td>
//   </tr>
//   <tr>
//     <td>1</td>
//   </tr>
// </table>, document.getElementById('root'))

//Написать функцию, которая строит таблицу n - td (кол-во столбцов) на k - tr (кол-во строк),
//используя Javascript. В каждую ячийку записать текст типа 'n - k'.

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.template = Array.from({ length: this.props.col }, (tr, r) =>
      Array.from({ length: this.props.row }, (td, k) => ({
        text: `${k + 1} Х ${r + 1} = ${(k + 1) * (r + 1)}`,
      }))
    );
    this.state = { template: this.template };
  }

  render() {
    return (
      <div>
        <h1>Таблица умножения</h1>
      <table>
        {this.state.template.map((row, a) => (
          <tr key={a}>
            {row.map((cell, b) => (
              <td key={b}>{cell.text}</td>
            ))}
          </tr>
        ))}
      </table>
      
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Table row="10" col="10" />);
