import Login from "./Login";
import CreatePost from "./CreatePost";
import DisplayPosts from "./Post";


export default function Main (){
    return (
        <div>
        <DisplayPosts/>
            <CreatePost/>
            <Login />
            
        </div>
    )
}