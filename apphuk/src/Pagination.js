import React, { Fragment, useState, useEffect } from "react";

const Pagination = ({userPerpage, totalUser, paginate})=>{

    const pageUser=[]

    for (let i=1; i<= Math.ceil(totalUser/userPerpage); i++){
     pageUser.push(i)
    }

    return(
        <div>
            <ul className="pagination">
                {
                  pageUser.map(number=>(
                    <li className="page-item" key={number}>
                        <a href="!#" className="page-link" onClick={()=>paginate(number)}>
                            {number}
                        </a>
                    </li>
                  ))  
                }

            </ul>
        </div>
    )
}
export default Pagination