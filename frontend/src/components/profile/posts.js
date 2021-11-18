import { useSelector } from "react-redux";
import Post from "../Post";

export default function ProfilePosts (props){
   let posts = props.posts;
	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});
	console.log(posts)
	return (
		posts?.map ( function (post)  {
			return (
				<Post info={post} />
			)
		}) 
    )
}