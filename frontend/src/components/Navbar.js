import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams} from "react-router-dom"
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
      <div className="iq-sidebar  sidebar-default ">
		<div id="sidebar-scrollbar">
			<nav className="iq-sidebar-menu">
				<ul id="iq-sidebar-toggle" className="iq-menu">
					<li>
						<a href="/" className=""> 
							<i class="bi bi-house-door"></i><span>Home</span>
						</a>
						{ state.isAuthorized && state.isAuthorized.username ? 
							<Link to={`/profile/${state.isAuthorized.username}`} className=""> 
								<i class="bi bi-person"></i><span>My Profile</span>
							</Link>
					 	: ""}
					</li>
				</ul>
			</nav>
          </div>
      </div>

    )
}

