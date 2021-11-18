import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import ProfileHeader from './profile/header';
import ProfilePosts from './profile/posts';

const axios = require ('axios');

export default function DisplayProfile (){
    const [ profileInfo, setProfileInfo ] = useState ("");
    const [ profilePosts, setProfilePosts ] = useState ([]);
    const { username } = useParams();

	const state = useSelector((state) => {
		return {
            isAuthorized: state.authenticationReducer.userId,
		};
	});

    useEffect(() => {
        async function fetchPosts (){
            await axios.get("/post/getPost", {
                params:
                    {
                        "fillter": "user",
                        "profile": profileInfo.userId,
                        "user": state.isAuthorized
                    }
                }).then( async (response) => {
                    setProfilePosts(response.data.response);
                }
            );
        }
        fetchPosts ();
    }, [profileInfo])
    useEffect(() => {
        async function fetchProfileData (){
            await axios.get("/profile/getProfile", {
                params:
                    {
                        "username": username,
                    }
            }).then(async (response) => {
                setProfileInfo(response.data.response);
            });
        }
        fetchProfileData ();
    }, [])
     return(
        <div>
            <ProfileHeader profile={profileInfo} posts={profilePosts}/>
            <ProfilePosts posts={profilePosts} />
        </div>
    )
}