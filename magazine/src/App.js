
import './App.css';
import React,{useEffect, useState} from 'react'
import Card from './Card';
function App() {

  const [products, setProducts] = useState([]);
  const [order, setOrder]=useState([])

  useEffect(()=>{
    (async()=>{
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json()
        setProducts(json.products); 
    })()
},[])

function AddToOrder(item){
  setOrder([item, ...order])
  console.log(item);
  }

  return (
    <div className="App">

      <h1>Выберите продукт</h1>
            <ul>
                {products.map(products => <li
                key={products.id}>
                    {products.title}
                    <img src={products.thumbnail} />
<<<<<<< HEAD
                    <button onClick={Buy(props)}>Select Product</button>
=======
                    <p>Price {products.price}</p>
                    <p>discountPercentage {products.discountPercentage}%</p>
                    <button id={products.id} onClick={()=>AddToOrder()}>Select Product</button>
>>>>>>> 070124f9a564b7a020578df1e1816f051ba326cf
                </li>)}
            </ul>
    
    </div>
  );
}

export default App;
