import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";

const axios = require ('axios');

export default function Navbar (){
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/#">Navbar scroll</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="/Post" href="">post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Link</a>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            {
              state.isAuthorized 
              ? <button className="btn btn-outline-danger" type="button" onClick={ () => sendLogoutRequest() }>Logout</button>
              : <button className="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            }
          </div>
        </div>
      </nav>
    )
}

