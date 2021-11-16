import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const axios = require ('axios');

export default function DisplayProfile (props){
    const [ profileInfo, setProfileInfo ] = useState ();
    const { id } = useParams();
    useEffect(() => {
        axios.get("/profile/getProfile", {
            params:
                {
                    "id": id,
                }
        }).then((response) => {
            setProfileInfo(response.data);
        });

    }, [])
     return(
        <div>

        </div>
     )
}