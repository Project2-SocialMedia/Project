import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "./components/CreatePost";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import DisplayPosts from "./components/Post";
import DisplayProfile from "./components/Profile";
import { authentication } from "./reducers/auth";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams} from "react-router-dom"
const auth = require ('./middlewares/auth');


export default function App (){
    const dispatch = useDispatch();
  
	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});

    useEffect(() => {
        auth.getUserId(localStorage.getItem("token")).then ( (id) => {
            dispatch(authentication.saveAuth(id));
        })
    },[])
    return (
        <Router>
        <div>
            <Navbar />
            <Main />
            <CreatePost/>
            <h1>{state.isAuthorized ? state.isAuthorized : "Nah"}</h1>
            
            <Routes>
                <Route path="/profile/:id" element={<DisplayProfile/>} />
            </Routes>


        </div>
        </Router>
    );
}