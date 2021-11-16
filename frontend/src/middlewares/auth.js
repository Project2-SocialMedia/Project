const axios = require ('axios');

async function getUserId (token){
    return axios.get('/sessions/getSession',{ params: 
        {
            token: token,
        }
    }).then (
        (response) => {
            if ( response ){
                return response.data.response.userId;
            }
        }
    )
}


module.exports = { getUserId: getUserId };