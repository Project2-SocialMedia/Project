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