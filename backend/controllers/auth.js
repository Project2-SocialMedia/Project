

function login ( username, password ){
    if ( username && username != "" ){
        if ( password && password != "" ){
            // Login and password Ok lets check if there is a user in database 
            authHelper("CHECK_CREDENTIALS",
            {
                username: username,
                password: password
            }).then(
                (response) => {
                    if ( response ){
                        if (response._id){
                            // response ok
                        }else{
                            // there is an error
                            return response;
                        }
                    }
                }
            )
        }else{
            return "password empty or null";
        }
    }else{
        return "username empty or null";
    }
}

function register ( username, password, email ){

}

function logout (){

}