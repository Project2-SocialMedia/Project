const postHelper = require ("../helpers/post");


async function createPost ( post ){
    if ( !post.user || post.user == "" ) {
        return { status: "error", response: "You must enter a username" }
    }
    if ( !post.content || post.content == "" ){ 
        return { status: "error", response: "You must enter a content" }
    }
    if ( !post.media || post.media == "" ) {
        return { status: "error", response: "You must enter a media" }
    }
    
    return await postHelper("CREATE_POST",post).then(
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

async function deletePost ( post ){
    if ( !post.id || post.id == "" ) {
        return { status: "error", response: "You must enter a id" }
    }

    return await postHelper("DELETE_POST",post).then(
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


module.exports = { createPost:createPost, deletePost:deletePost }