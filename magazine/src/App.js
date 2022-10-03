import {Fragment, useEffect, useState} from "react";
import List from "./List";
import './style.css'
import Cart from "./Cart";

export default function App() {
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch('https://dummyjson.com/products');
            const json = await response.json();
            setProducts(json.products);
        })()
    }, [])

    function addToCart(productForAdd) {
        if (orders.some(order => order.product === productForAdd)) {
            setOrders(orders.map(order => {
                if (order.product === productForAdd) {
                    order.count++;
                }
                return order
            }))
        } else {
            setOrders([...orders, {
                product: productForAdd,
                count: 1,
            }])
        }
    }

<<<<<<< HEAD
    return (
        <Fragment>
            <div className='container'>
                <Cart orders={orders} setOrders={setOrders}/>
                <List products={products} addToCart={addToCart}/>
            </div>
        </Fragment>
    )
=======
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
>>>>>>> 76a734d616e6cf66b016bce8059831ca9be890c5
}
