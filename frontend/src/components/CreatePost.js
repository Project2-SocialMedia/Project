import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require ('axios');



export default function CreatePost (){

  const contentInput = useRef("");
	const nvaigator = useNavigate();
	const [renderState, setRenderState ] = useState(false);
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
          media :"no media"
        }).then (
          (response) => {
			window.location.reload();
          }
        )
    }}



	return(    
		<div class="col-sm-12">
			<div id="post-modal-data" class="card card-block card-stretch card-height">
				<div class="card-header d-flex justify-content-between">
					<div class="header-title">
						<h4 class="card-title">New Post</h4>
					</div>
				</div>
				<div class="card-body">
					<div class="d-flex align-items-center">
						<div class="user-img">
							<img src="assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle"></img> 
						</div>
						<form class="post-text ms-3 w-100 ">
							<textarea ref={contentInput} type="textarea" class="form-control rounded" placeholder="Write something here..."></textarea>
						</form>
					</div>
					<hr></hr>
					<ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
						<li class="me-3 mb-md-0 mb-2">
							<button class="btn btn-soft-primary" onClick={() => addPost()}>
							<i class="fa fa-plus text-info" aria-hidden="true"></i> Post
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}