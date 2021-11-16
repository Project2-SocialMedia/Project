import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import DisplayProfile from "./components/Profile";
=======
>>>>>>> 4f0e6f4fddacf65a8bfb82c194ea4d1bc726a373
import { authentication } from "./reducers/auth";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams} from "react-router-dom"
import DisplayProfile from "./components/Profile";
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
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/profile/:username" element={<DisplayProfile/>} />
            </Routes>

            <CreatePost/>
            <DisplayPosts/>


        </div>
        </Router>
    );
}