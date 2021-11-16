import { useRef } from "react";
import '../app.css'
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";

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
                            dispatch(authentication.saveAuth(response.data.response._id));
                        }
                    }
                )
            }
        )
    }
    return (
      <div>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
        Login
        </button>
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="login-container">
                        <div className="mb-6">
                            <label htmlFor="usernameInput" className="form-label">User Name</label>
                            <input ref={usernameInput} type="text" className="form-control" id="usernameInput"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">Password</label>
                            <input ref={passwordInput} type="password" className="form-control" id="passwordInput"></input>
                        </div>
                        <button className="btn btn-primary" onClick={ ()=> sendLoginRequest() }>Login</button>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Login</button>
            </div>
            </div>
         </div>
      </div>
        </div>
    );
}