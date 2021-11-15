const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const followController = require ("../controllers/follow");

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})


router.get ( '/getFollow', async (request,response) => {
    let follow = await followController.getFollow(request.body);
    response.send ( follow )
})


// POST

router.post ( '/createFollow', async (request,response) => {
    let follow = await followController.createFollow(request.body);
    response.send ( follow )
})

// DELETE

router.delete ( '/unfollow', async (request,response) => {
    let follow = await followController.unfollow(request.body);
    response.send ( follow );
})



module.exports = router;