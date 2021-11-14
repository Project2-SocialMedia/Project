const authHelper = require ("../helpers/auth");

async function login ( username, password ){
    if ( username && username != "" ){
        if ( password && password != "" ){
            // Login and password ok lets check if there is a user in database 
            return await authHelper("CHECK_CREDENTIALS",
            {
                username: username,
                password: password
            }).then(
                (response) => {
                    if ( response ){
                        if (response._id){
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
                            response: "Check your credeintals"
                        }
                    }
                }
            )
        }else{
            return {
                status: "error",
                response: "Check your credeintals"
            }
        }
    }else{
        return {
            status: "error",
            response: "Check your credeintals"
        }
    }
}

async function register ( credeintals ){
    if ( !credeintals.username || credeintals.username == "" ) {
        return { status: "error", response: "You must enter a username" }
    }
    if ( !credeintals.email || credeintals.email == "" ){ 
        return { status: "error", response: "You must enter a email" }
    }
    if ( !credeintals.password || credeintals.password == "" ) {
        return { status: "error", response: "You must enter a password" }
    }
    if ( !credeintals.name || credeintals.name == "" ) {
        return { status: "error", response: "You must enter a name" }
    }
    return await authHelper("CREATE_USER",credeintals).then(
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
                    response: "Check your credeintals"
                }
            }
        }
    )
}

function logout (){

}

module.exports = { login: login, register: register, logout: logout }