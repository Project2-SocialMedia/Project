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
                    <ul class="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                        { state.isAuthorized && state.isAuthorized.userId === profile.userId ? 
                            <li><a><i class="ri-pencil-line"></i></a></li>
                            :""
                        }
                    </ul>
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
                          <li class="text-center pe-3">
                             <a href="#"><img src="../assets/images/icon/08.png" class="img-fluid rounded" alt="facebook"></img></a>
                          </li>
                          <li class="text-center pe-3">
                             <a href="#"><img src="../assets/images/icon/09.png" class="img-fluid rounded" alt="Twitter"></img></a>
                          </li>
                          <li class="text-center pe-3">
                             <a href="#"><img src="../assets/images/icon/10.png" class="img-fluid rounded" alt="Instagram"></img></a>
                          </li>
                          <li class="text-center pe-3">
                             <a href="#"><img src="../assets/images/icon/11.png" class="img-fluid rounded" alt="Google plus"></img></a>
                          </li>
                          <li class="text-center pe-3">
                             <a href="#"><img src="../assets/images/icon/12.png" class="img-fluid rounded" alt="You tube"></img></a>
                          </li>
                          <li class="text-center md-pe-3 pe-0">
                             <a href="#"><img src="../assets/images/icon/13.png" class="img-fluid rounded" alt="linkedin"></img></a>
                          </li>
                       </ul>
                    </div>
                    <div class="social-info">
                       <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                          <li class="text-center ps-3">
                             <h6>Posts</h6>
                             <p class="mb-0">0</p>
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