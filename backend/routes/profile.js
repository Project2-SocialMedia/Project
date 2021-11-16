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
    let profile = await profileController.getProfile(request.query);
    response.send ( profile )
})


// POST

router.post ( '/createProfile', async (request,response) => {
    let profile = await profileController.createProfile(request.body);
    response.send ( profile )
})

// PUT

router.put ( '/updateProfile', async (request,response) => {
    let profile = await profileController.updateProfile(request.body);
    response.send ( profile )
})

module.exports = router;