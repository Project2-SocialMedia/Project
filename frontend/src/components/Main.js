import CreatePost from "./CreatePost";
import DisplayPosts from "./Posts";

import { useDispatch, useSelector } from "react-redux";

export default function Main (){
    const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});
    return (
        <div>
            { state.isAuthorized && state.isAuthorized.name ? <CreatePost /> : "" }
            <DisplayPosts />
        </div>

    )
}