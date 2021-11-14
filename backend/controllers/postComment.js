const commentHelper = require ("../helpers/postComment");



async function getComment ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await commentHelper("GET_COMMENT",query).then(
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


async function createComment ( post ){
    if ( !post.user || post.user == "" ) {
        return { status: "error", response: "You must enter a username" }
    }
    if ( !post.comment || post.comment == "" ){ 
        return { status: "error", response: "You must enter a comment" }
    }
    if ( !post.post || post.post == "" ){ 
        return { status: "error", response: "You must enter a post" }
    }
    
    return await postHelper("CREATE_COMMENT",post).then(
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

async function deleteComment ( comment ){
    if ( !comment.id || comment.id == "" ) {
        return { status: "error", response: "You must enter a id" }
    }

    return await commentHelper("DELETE_COMMENT",comment).then(
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


module.exports = { getComment:getComment, createComment:createComment, deleteComment:deleteComment}