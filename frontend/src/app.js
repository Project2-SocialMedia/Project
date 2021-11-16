import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { authentication } from "./reducers/auth";

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
        
        <div>
            <Navbar />
            <Main />
            <h1>{state.isAuthorized ? state.isAuthorized : "Nah"}</h1>
            <h1>{userId ? userId: "Nah"}</h1>

        </div>
    );
}