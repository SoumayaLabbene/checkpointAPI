import axios from "axios";
import { useState } from "react";

import React from "react";

const UserList = () => {


    const [listofuser,setlistofuser]=useState(

        []
    );

  
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setlistofuser(response.data);
    });
  }, []);



    return (

        <div style={{textAlign:'center'}}>

        { listofuser.map(e => <p>  {e.name} </p>)}
        
        
        </div>
      );
}
 
export default UserList;