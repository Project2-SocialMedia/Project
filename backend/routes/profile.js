const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const profileController = require ("../controllers/profile");

// GET

router.get ( '/', (request,response) => {
    //const login = authController.login()
    response.send ( request.body );
})


router.get ( '/getProfile', async (request,response) => {
    let post = await profileController.getProfile(request.body);
    response.send ( post )
})


// POST

router.post ( '/createComment', async (request,response) => {
    let post = await profileController.createProfile(request.body);
    response.send ( post )
})


module.exports = router;