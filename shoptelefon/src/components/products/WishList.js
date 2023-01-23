

import {NavLink, useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../api/products'

export default function WishList({product}){
    const [list, setList] = useState();


    useEffect(()=>{
      api.wishList()
          .then(resp => setList(resp.data.data),
          console.log(setList)
          )
    },[])
    
    return (
        <div className="card product-card">
            
            
            <div className="info-wrap">
                <NavLink to={`/products/wishlist`}>{list}GB</NavLink>
          
            </div>
           
        </div>
    )
}
