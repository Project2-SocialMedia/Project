const followHelper = require ("../helpers/follow");



async function getFollow ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await followHelper("GET_FOLLOWERS",query).then(
        (response) => {
            if ( response ){
                if (response){
                    return {
                        status: "ok",
                        response: response
                    }
                }else{
                    return {
                        status: "error",
                        response: response
                    }
                }
            }else{
                return {
                    status: "error",
                    response: "Check your post"
                }
            }
        }
    )
}


async function followeUsers ( follow ){
    if ( !follow.follower || follow.follower == "" ) {
        return { status: "error", response: "You must enter a id" }
    }
    if ( !follow.following || follow.following == "" ){ 
        return { status: "error", response: "You must enter a id" }
    }

    
    return await followHelper("FOLLOW",follow).then(
        (response) => {
            if ( response ){
                if (response){
                    return {
                        status: "ok",
                        response: response
                    }
                }else{
                    return {
                        status: "error",
                        response: response
                    }
                }
            }else{
                return {
                    status: "error",
                    response: "Check your post"
                }
            }
        }
    )
}

async function unfollowUser ( follow ){
    if ( !follow.follower || follow.follower == "" ) {
        return { status: "error", response: "You must enter a id" }
    }
    if ( !follow.following || follow.following == "" ){ 
        return { status: "error", response: "You must enter a id" }
    }

    return await followHelper("UNFOLLOW",follow).then(
        (response) => {
            if ( response ){
                if (response){
                    return {
                        status: "ok",
                        response: response
                    }
                }else{
                    return {
                        status: "error",
                        response: response
                    }
                }
            }else{
                return {
                    status: "error",
                    response: "Check your post"
                }
            }
        }
    )
}


module.exports = { followeUsers:followeUsers, unfollowUser:unfollowUser, getFollow:getFollow }