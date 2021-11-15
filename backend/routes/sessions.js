const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const sessionController = require ("../controllers/sessions");

// GET

router.get ( '/', (request,response) => {
    //const login = authController.login()
    response.send ( request.body );
})

// POST

router.post ( '/updateSession', async (request,response) => {
    let session = await sessionController.updateSession(request.body);
    response.send ( session )
})

module.exports = router;