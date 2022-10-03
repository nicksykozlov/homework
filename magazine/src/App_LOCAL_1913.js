
import './App.css';
import React,{useEffect, useState} from 'react'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    (async()=>{
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json()
        setProducts(json.products); 
    })()
},[])

  return (
    <div className="App">

      <h1>Выберите продукт</h1>
            <ul>
                {products.map(products => <li
                key={products.id}>
                    {products.title}
                    <img src={products.thumbnail} />
                    <button onClick={Buy(props)}>Select Product</button>
                </li>)}
            </ul>
    
    </div>
  );
}

export default App;
