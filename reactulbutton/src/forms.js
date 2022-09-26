// import {useState} from "react";

// export default function Forms(props){
//     const [text, setText] = useState('');
//     function submit(e){
//         e.preventDefault();
//         props.onAddItem(text);
//         setText('')
//     }
//     function updateText(e){
//         setText(e.target.value)

//     }
//     return(
//         <form onSubmit={(e)=>submit(e)}>
//             <input 
//             type='text'
//             value={text}
//             onChange={updateText}
//             />
//             <input 
//             type="submit"
//             value="Add"
//             />
//         </form>
//     )
// }


// export default function List(props){
//     function remove(item){
//         props.onRemove(item);
//     }
//     return(
//         <ul>
//             {props.items.map((item,index)=>
//             <li key={index}>{item}
//             <button onClick={()=>remove(item)}>x</button>
//             </li>
//             )}
//         </ul>
//     )
// }