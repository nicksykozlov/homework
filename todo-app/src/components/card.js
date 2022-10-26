/// рендерить список из
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import '../css/card.css'
import {selectProducts} from '../store/productStore'
import {
  add,
  del,
} from '../store/cardStore';
import {selectCount} from '../store/cardStore'


export default function Card() {
  const cartItems = useSelector(selectCount);
  const products = useSelector(selectProducts);
  const dispach = useDispatch()

  function getProductCartItem(id){
    const product = products.find(p=> p.id === id);
    return product?.title;
  }

  function deleteCartItem(id){
    dispach(del(id))
  }

  
  return (
      <ul>
        {cartItems.map(
          cartItems=>
          <li key={cartItems.id}>
            {getProductCartItem(cartItems.id)}:{cartItems.count}
            <button onClick={()=>deleteCartItem(cartItems.id)}>delete</button>
          </li>
        )}
      </ul>
  );
}
