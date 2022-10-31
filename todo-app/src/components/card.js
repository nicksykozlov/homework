/// рендерить список из
import { useSelector } from "react-redux";
import { selectCount } from "../store/cardStore";
import { useParams } from "react-router-dom";
import '../css/card.css'

export default function Card() {
  const count = useSelector(selectCount);
  const {card} = useParams()
  return (

    <div className="card">
     
     <h3>Ваша Корзина</h3>
      <p>
        Количество
              
      </p>
      <span>{count}</span>
    </div>
  );
}
