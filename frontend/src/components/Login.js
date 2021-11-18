import { useRef } from "react";
import '../app.css'
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams} from "react-router-dom"
import Register from "./Register";
    
const axios = require ('axios');
const auth = require('../middlewares/auth');

export default function Login (){
    const dispatch = useDispatch();

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const sendLoginRequest = () => {
        axios.post('/auth/login',{
            "username": usernameInput.current.value,
            "password": passwordInput.current.value
        }).then (
            (response) => {
                if (!localStorage.getItem("token")){
                    localStorage.setItem("token",response.data.token)
                }
                axios.post('/sessions/updateSession',{ 
                    token: localStorage.getItem("token"),
                    updateInfo: { 
                        "userId": response.data.response._id,
                    },
                }).then (
                    (rsp) => {
                        if ( response.data.status === "ok" ) {
                            dispatch(authentication.saveAuth(response.data.response));
                        }
                    }
                )
            }
        )
    }
    return (
	
    <div>
        <Register />
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalTitle">Login</h5>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="usernameInput" class="form-label">User Name</label>
                            <input ref={usernameInput} type="text" class="form-control" id="usernameInput"></input>
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input ref={passwordInput} type="password" class="form-control" id="passwordInput"></input>
                        </div>
                        <small>Don't have an account yet? <p className="d-inline text-primary" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</p></small>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => sendLoginRequest() }>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}