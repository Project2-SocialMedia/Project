const axios = require ('axios');

async function getUserId (token){
    return axios.get('/sessions/getSession',{ params: 
        {
            token: token,
        }
    }).then (
        (response) => {
            if ( response ){
                return axios.get("/profile/getProfile", {
                    params:
                        {
                            "id": response.data.response.userId,
                        }
                }).then((rss) => {
                    if ( rss.data.status === "ok" ){
                        return rss.data.response;
                    }else{
                        return "false";
                    }
                });       
                
            }
        }
    )
}


module.exports = { getUserId: getUserId };