import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
const axios = require ('axios');

export default function DisplayPosts (){
    const [ postsArray, setPostsArray] = useState([]);
	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});


    useEffect(() => {
        async function fetchPosts (){
            await axios.get("/post/getPost", {
                params:
                    {
                        "fillter": "all",
                        "user": state.isAuthorized
                    }
                }).then( async (response) => {
                    setPostsArray(response.data.response);
                }
            );
        }
        fetchPosts ();
    }, [])

    return(
        <div>
            {
                postsArray?.map ( function (post)  {
                    return (
                        <Post info={post} />
                    )
                }) 

            }
        </div>
    )
}
