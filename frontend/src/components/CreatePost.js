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
    <div class="col-sm-12">
    <div id="post-modal-data" class="card card-block card-stretch card-height">
       <div class="card-header d-flex justify-content-between">
          <div class="header-title">
             <h4 class="card-title">Create Post</h4>
          </div>
       </div>
       <div class="card-body">
          <div class="d-flex align-items-center">
             <div class="user-img">
                <img src="assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle"></img> 
             </div>
             <form class="post-text ms-3 w-100 "  data-bs-toggle="modal" data-bs-target="#post-modal" action="javascript:void();">
                <input type="text" class="form-control rounded" placeholder="Write something here..."></input>
             </form>
          </div>
          <hr></hr>
          <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
             <li class="me-3 mb-md-0 mb-2">
                <a href="#" class="btn btn-soft-primary">
                   <img src="assets/images/small/07.png" alt="icon" class="img-fluid me-2"></img> Photo/Video
                </a>
             </li>
             <li class="me-3 mb-md-0 mb-2">
                <a href="#" class="btn btn-soft-primary">
                   <img src="assets/images/small/08.png" alt="icon" class="img-fluid me-2"></img> Tag Friend
                </a>
             </li>
             <li class="me-3">
                <a href="#" class="btn btn-soft-primary">
                   <img src="assets/images/small/09.png" alt="icon" class="img-fluid me-2"></img>  Feeling/Activity
                </a>
             </li>
             <li>
                <button class="btn btn-soft-primary">
                   <div class="card-header-toolbar d-flex align-items-center">
                      <div class="dropdown">
                         <div class="dropdown-toggle" id="post-option"   data-bs-toggle="dropdown">
                            <i class="ri-more-fill"></i>
                         </div>
                         <div class="dropdown-menu dropdown-menu-right" aria-labelledby="post-option">
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Check in</a>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Live Video</a>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Gif</a>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Watch Party</a>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Play with Friend</a>
                         </div>
                      </div>
                   </div>
                </button>
             </li>
          </ul>
       </div>
       <div class="modal fade" id="post-modal" tabindex="-1"  aria-labelledby="post-modalLabel" aria-hidden="true" >
          <div class="modal-dialog   modal-fullscreen-sm-down">
             <div class="modal-content">
                <div class="modal-header">
                   <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="ri-close-fill"></i></button>
                </div>
                <div class="modal-body">
                   <div class="d-flex align-items-center">
                      <div class="user-img">
                         <img src="assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle img-fluid"></img> 
                      </div>
                      <form class="post-text ms-3 w-100" action="javascript:void();">
                         <input type="text" class="form-control rounded" placeholder="Write something here..."></input>
                      </form>
                   </div>
                   <hr></hr>
                   <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/07.png" alt="icon" class="img-fluid"></img> Photo/Video</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/08.png" alt="icon" class="img-fluid"></img>  Tag Friend</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/09.png" alt="icon" class="img-fluid"></img>  Feeling/Activity</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/10.png" alt="icon" class="img-fluid"></img>  Check in</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/11.png" alt="icon" class="img-fluid"></img>  Live Video</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/12.png" alt="icon" class="img-fluid"></img>  Gif</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/13.png" alt="icon" class="img-fluid"></img>  Watch Party</div>
                      </li>
                      <li class="col-md-6 mb-3">
                         <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="assets/images/small/14.png" alt="icon" class="img-fluid"></img>  Play with Friends</div>
                      </li>
                   </ul>
                   <hr></hr>
                   <div class="other-option">
                      <div class="d-flex align-items-center justify-content-between">
                         <div class="d-flex align-items-center">
                            <div class="user-img me-3">
                               <img src="assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle img-fluid"></img>
                            </div>
                            <h6>Your Story</h6>
                         </div>
                         <div class="card-post-toolbar">
                            <div class="dropdown">
                               <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                               <span class="btn btn-primary">Friend</span>
                               </span>
                               <div class="dropdown-menu m-0 p-0">
                                  <a class="dropdown-item p-3" href="#">
                                     <div class="d-flex align-items-top">
                                        <i class="ri-save-line h4"></i>
                                        <div class="data ms-2">
                                           <h6>Public</h6>
                                           <p class="mb-0">Anyone on or off Facebook</p>
                                        </div>
                                     </div>
                                  </a>
                                  <a class="dropdown-item p-3" href="#">
                                     <div class="d-flex align-items-top">
                                       <i class="ri-close-circle-line h4"></i>
                                        <div class="data ms-2">
                                           <h6>Friends</h6>
                                           <p class="mb-0">Your Friend on facebook</p>
                                        </div>
                                     </div>
                                  </a>
                                  <a class="dropdown-item p-3" href="#">
                                     <div class="d-flex align-items-top">
                                        <i class="ri-user-unfollow-line h4"></i>
                                        <div class="data ms-2">
                                           <h6>Friends except</h6>
                                           <p class="mb-0">Don't show to some friends</p>
                                        </div>
                                     </div>
                                  </a>
                                  <a class="dropdown-item p-3" href="#">
                                     <div class="d-flex align-items-top">
                                        <i class="ri-notification-line h4"></i>
                                        <div class="data ms-2">
                                           <h6>Only Me</h6>
                                           <p class="mb-0">Only me</p>
                                        </div>
                                     </div>
                                  </a>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <button type="submit" class="btn btn-primary d-block w-100 mt-3">Post</button>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>

)
}