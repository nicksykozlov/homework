import { useState, Fragment, useEffect } from "react";

export default function MyApp() {
    const [text, setText] = useState('');
    const [spisok, setSpisok] = useState([]);

    function addItem() {
        setSpisok([...spisok, text]);
        setText('');
    }
    function delItem(item) {
        setSpisok(spisok.filter(el => el !== item));

    }
    function TrItem(item){
        setSpisok(spisok.filter(el =>(el==item) ? item.className='TRitem':item.className='item'))
    }

    return (
        <Fragment>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={() => addItem()}>click me</button>
            <ul>

                {spisok.map((item, index) =>

                    <li 
                    key={index}>{item}
                        <input type="checkbox" onChange={()=> TrItem()}></input>
                        <button onClick={() => delItem(item)}> del</button>
                    </li>)}
            </ul>
        </Fragment>
    )

}
