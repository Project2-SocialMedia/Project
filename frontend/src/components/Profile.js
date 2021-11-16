import { useEffect } from 'react';
import { useParams } from "react-router";
const axios = require ('axios');

export default function DisplayProfile (){
    const { ID } = useParams();
    useEffect(() => {
        
        axios.get("/profile/getProfile", {params:
            {
                id: ID,
            }}).then((response) => {
                console.log(response.data);
              });

    }, [])
     return(
         <div>

         </div>
     )
}