const blockHelper = require ("../helpers/blockUser");



async function getBlocks ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await blockHelper("GET_BLOCK",query).then(
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


async function blockUsers ( block ){
    if ( !block.user || block.user == "" ) {
        return { status: "error", response: "You must enter a user" }
    }

  
    return await blockHelper("BLOCK",block).then(
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

async function unBlockUser ( block ){
    if ( !block.user || block.user == "" ) {
        return { status: "error", response: "You must enter a user" }
    }


    return await blockHelper("UNBLOCK",block).then(
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


module.exports = { blockUsers:blockUsers, unBlockUser:unBlockUser, getBlocks:getBlocks }