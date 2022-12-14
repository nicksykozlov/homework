
import './App.css';

function App() {
  
  const data =  {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  }
  const grafik = Object.values(data);
  console.log(grafik);
  

  return (
    <div className="App">
     <ul>
      {grafik.map(e=><li key={e.length}>{e.data[0]}</li>)}
     </ul>
    </div>
  );
}

export default App;
