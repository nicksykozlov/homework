import React,{useEffect, useState} from 'react'

export default function Card(){
const  [card, setCard]=useState([])

function AddToOrder(item){
setCard(item)
console.log(item);
}

return(
    <div>
        <table>
            <td>
                <tr>

                </tr>
            </td>
        </table>
    </div>
)

}