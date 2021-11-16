import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import DisplayProfile from "./components/Profile";
import { authentication } from "./reducers/auth";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams} from "react-router-dom"
import DisplayPosts from './components/Post';
import "./app.css"

const auth = require ('./middlewares/auth');


export default function App (){
    const dispatch = useDispatch();
  
	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});
    const [userId, setUserId ] = useState ();

    useEffect(() => {
        auth.getUserId(localStorage.getItem("token")).then ( (id) => {
            dispatch(authentication.saveAuth(id));
        })
    },[])
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/profile/:username" element={<DisplayProfile/>} />
            </Routes>
        </Router>
    );
}