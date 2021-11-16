import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "./components/CreatePost";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import DisplayPosts from "./components/Post";
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
            <Main />
            <CreatePost/>
            <h1>{state.isAuthorized ? state.isAuthorized : "Nah"}</h1>
<<<<<<< HEAD
            <h1>{userId ? userId: "Nah"}</h1>
            <Router>
                <Switch>
                <Route path="/profile/{id}" element={DisplayProfile} />
                </Switch>
            </Router>
=======
            
            <Routes>
                <Route path="/profile/:id" element={<DisplayProfile/>} />
            </Routes>


>>>>>>> 126f3bd6700a99c07c28dd290bace300a1f6e225
        </div>
        </Router>
    );
}