import { useSelector } from "react-redux";


export default function ProfileHeader (props){
    let profile = props.profile;
	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});
    return (
        <div class="col-sm-12">
        <div class="card">
           <div class="card-body profile-page p-0">
              <div class="profile-header">
                 <div class="position-relative">
                    <img src="../assets/images/page-img/profile-bg1.jpg" alt="profile-bg" class="rounded img-fluid"></img>
                 </div>
                 <div class="user-detail text-center mb-3">
                    <div class="profile-img">
                       <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="profile-img" class="avatar-130 img-fluid" />
                    </div>
                    <div class="profile-detail">
                       <h3 class="">{ profile.name }</h3>
                    </div>
                 </div>
                 <div class="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                    <div class="social-links">
                       <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                       { state.isAuthorized && state.isAuthorized.userId === profile.userId ? 
                            <li className="ms-3"><button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editProfileModal"><i class="ri-pencil-line"></i></button></li>
                            :""
                        }
                       </ul>
                    </div>
                    <div class="social-info">
                       <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                          <li class="text-center ps-3">
                             <h6>Posts </h6>
                             <p class="mb-0">{props.posts.length}</p>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>

    )
}