import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../app.css"
const axios = require ('axios');

export default function DisplayPosts (){
    const [ postsArray, setPostsArray] = useState([]);

	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});

    async function getUserProfile (id){
        return axios.get("/profile/getProfile", {
            params:
                {
                    "id": id,
                }
        }).then((response) => {
            console.log(response.data.response)
            return response.data.response;
        });        
    }

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
                postsArray?.map ( (post) => {
                    return (
                        <div className= "post">
                            <div class="card text-center">
                                <div class="card-header">
                                    {post.user}
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{post.content}</p>
                                </div>
                                <div class="card-footer text-muted">
                                    Footer
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}