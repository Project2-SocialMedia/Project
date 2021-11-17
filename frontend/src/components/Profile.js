import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const axios = require ('axios');

export default function DisplayProfile (){
    const [ profileInfo, setProfileInfo ] = useState ("");
    const { username } = useParams();

    useEffect(() => {
        async function fetchProfileData (){
            await axios.get("/profile/getProfile", {
                params:
                    {
                        "username": username,
                    }
            }).then(async (response) => {
                setProfileInfo(response.data.response);
                console.log(response.data.response);
            });
        }
        fetchProfileData ();
    }, [])
     return(
        <div>
            <h1>{profileInfo._id}</h1>
        </div>
    )
}