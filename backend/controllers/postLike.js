const likeHelper = require ("../helpers/postLike");



async function getLike ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await likeHelper("GET_LIKE",query).then(
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


async function createLike ( like ){
    if ( !like.user || like.user == "" ) {
        return { status: "error", response: "You must enter a username" }
    }
    if ( !like.post || like.post == "" ){ 
        return { status: "error", response: "You must enter a post" }
    }

    
    return await likeHelper("CREATE_LIKE",like).then(
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

async function deleteLike ( like ){
    if ( !like.id || like.id == "" ) {
        return { status: "error", response: "You must enter a id" }
    }

    return await postHelper("DELETE_LIKE",like).then(
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


module.exports = { createLike:createLike, deleteLike:deleteLike, getLike:getLike}