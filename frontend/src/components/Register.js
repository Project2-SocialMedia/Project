import { useRef } from "react";
import '../app.css'
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams} from "react-router-dom"
    
const axios = require ('axios');
const auth = require('../middlewares/auth');

export default function Register (){
    return (
        <div>
            <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="registerModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="usernameInput" class="form-label">User Name</label>
                                <input type="text" class="form-control" id="usernameInput"></input>
                            </div>
                            <div class="mb-3">
                                <label for="passwordInput" class="form-label">Password</label>
                                <input type="password" class="form-control" id="passwordInput"></input>
                            </div>
                            <small>Don't have an account yet? <p className="d-inline text-primary">Sign Up</p></small>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}