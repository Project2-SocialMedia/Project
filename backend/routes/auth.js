const express = require('express');
const router = express.Router();
const authController = require ("../controllers/auth");
const sessionF = require('../helpers/sessions');

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})

router.post ( '/login', async (request,response) => {
    let login = await authController.login(request.body);
    if ( login.status === "ok" ){
        let token = "";
        await require('crypto').randomBytes(48, function(ex, buf) {
            token = buf.toString('base64').replace(/\//g,'_').replace(/\+/g,'-');
            login.token = token;
            if ( sessionF( "GET", { token: token } ) && sessionF( "GET", { token: token } ).token ){
                sessionF("UPDATE", 
                    { 
                        token: token,
                        updateInfo: { 
                            "userId": login.response._id,
                        },
                    }
                );
                console.log("GET & UPDATE")
            }else{
                sessionF("CREATE", 
                    { 
                        token: token,
                        updateInfo: { 
                            "userId": login.response._id,
                        },
                    }
                );
                console.log("CREATE")
            }

            response.send ( login );
        })
    }else{
        response.send ( login );
    }
})

// POST

router.post ( '/register', async (request,response) => {
    let register = await authController.register(request.body);
    response.send ( register )
})

module.exports = router;