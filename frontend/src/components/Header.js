import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";
const axios = require ('axios');


export default function Header (){
    const dispatch = useDispatch();

    const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});
    const sendLogoutRequest = () => {
		axios.delete('/sessions/deleteSession',{
			data:
			{
				"token": localStorage.getItem("token")
			}
		}).then (
			(response) => {
				dispatch(authentication.saveAuth(null));
			}
		)
	}
    return (
        <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="iq-navbar-logo d-flex justify-content-between">
                      <a href="index.html">
                          <img src="../assets/images/logo.png" className="img-fluid" alt=""></img>
                          <span>SocialV</span>
                      </a>
                      <div className="iq-menu-bt align-self-center">
                          <div className="wrapper-menu">
                              <div className="main-circle"><i className="ri-menu-line"></i></div>
                          </div>
                      </div>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-label="Toggle navigation">
                      <i className="ri-menu-3-line"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { state.isAuthorized && state.isAuthorized.name ? 
                      <ul className="navbar-nav  ms-auto navbar-list">
                           <li className="nav-item dropdown">
                              <a href="#" className="   d-flex align-items-center dropdown-toggle" id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <img src="../assets/images/user/1.jpg" className="img-fluid rounded-circle me-3" alt="user"></img>
                                  <div className="caption">
                                      <h6 className="mb-0 line-height">{ state.isAuthorized.name }</h6>
                                  </div>
                              </a>
                              <div className="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                                  <div className="card shadow-none m-0">
                                      <div className="card-body p-0 ">
                                          <div className="d-inline-block w-100 text-center p-3">
                                              <button className="btn btn-primary iq-sign-btn" onClick={() => sendLogoutRequest()}>Sign
                                                  out<i className="ri-login-box-line ms-2"></i></button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                      :                      
                      <button class="btn btn-primary d-block mt-3" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                    }
                  </div>
              </nav>
          </div>
      </div>   
    )
}