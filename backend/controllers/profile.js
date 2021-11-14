const profileHelper = require ("../helpers/profile");



async function getProfile ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await profileHelper("GET_PROFILE",query).then(
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
                    response: "Check your profile"
                }
            }
        }
    )
}


async function createProfile ( profile ){
    if ( !profile.userId || profile.userId == "" ) {
        return { status: "error", response: "You must enter a user id" }
    }
    
    return await profileHelper("CREATE_PROFILE",profile).then(
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
                    response: "Check your profile"
                }
            }
        }
    )
}

module.exports = { getProfile:getProfile, createProfile:createProfile }