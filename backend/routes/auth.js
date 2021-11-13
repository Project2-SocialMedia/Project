const express = require('express');
const router = express.Router();
const authController = require ("../controllers/auth");
// GET

router.get ( '/', (request,response) => {
    //const login = authController.login()
    response.send ( request.body );
})

router.get ( '/login', async (request,response) => {
    let credentials = request.body;
    let login = await authController.login(credentials.username, credentials.password);
    response.send ( login )
})

// POST

router.post ( '/register', async (request,response) => {
    let register = await authController.register(request.body);
    response.send ( register )
})

module.exports = router;