import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
const axios = require ('axios');


export default function CreatePost (){

  const contentInput = useRef("");

  const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});


    const addPost = () => {
      if (state.isAuthorized){
        axios.post("/post/createPost",{
          user : state.isAuthorized,
          content : contentInput.current.value,
          media :"nn"
        }).then (
          (response) => {
            console.log("Add Post: ", response.data);
          }
        )
    }}



  return(    
    <div class="form-floating">
        <textarea ref={contentInput} class="form-control" placeholder="Leave a Post here" id="floatingTextarea2"></textarea>
        <label for="floatingTextarea2">Post</label>
        <button onClick= { () => addPost() }>Add</button>
    </div>
)
}