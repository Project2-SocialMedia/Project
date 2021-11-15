const sessionHelper = require ("../helpers/sessions");



async function updateSession ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await sessionHelper("UPDATE",query).then(
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
                    response: "check your queries"
                }
            }
        }
    )
}

async function getSession ( query ){
    if ( !query || query.length == 0 ) {
        return { status: "error", response: "You must enter a query" }
    }

    return await sessionHelper("GET",query).then(
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
                    response: "check your queries"
                }
            }
        }
    )
}

module.exports = { updateSession: updateSession, getSession: getSession }