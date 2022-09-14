import React, { Fragment, useState, useEffect } from 'react';
function UserProfile(props){
    const[isLoading, setLoading]= useState(false);
    const [user, setUser] = useState(false);
    useEffect(()=>{
        setLoading(true)  
        async function loadData(){
                    const response= await fetch('http://dummyjson.com/users/' + props.userId);
          const json = await response.json()
          setUser(json)
          setLoading(false)
        }
        if(props.userId){
            loadData();
        }
      },[props.userId])
      return(
        <Fragment>
            {isLoading ? <h1>loading</h1>:
            <Fragment>
                <img src={user.image} alt="" />
                <ul>
                    <li>{user.id}</li>
                    <li>{user.firstName}</li>
                    <li>{user.age}</li>
                </ul>
            </Fragment>
            }
        </Fragment>
      );
}
export default UserProfile