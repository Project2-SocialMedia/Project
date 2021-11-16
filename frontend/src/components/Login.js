import { useRef } from "react";
const axios = require ('axios');
const auth = require('../middlewares/auth');

export default function Login (){
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
                    (response) => {
                        
                    }
                )
            }
        )
    }
    return (
        <div>
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
    );
}