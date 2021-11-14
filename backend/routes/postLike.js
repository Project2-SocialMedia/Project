const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const likeController = require ("../controllers/postLike");

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})


router.get ( '/getLike', async (request,response) => {
    let like = await likeController.getLike(request.body);
    response.send ( like )
})


// POST

router.post ( '/createLike', async (request,response) => {
    let like = await likeController.createLike(request.body);
    response.send ( like )
})

// DELETE

router.delete ( '/deleteLike', async (request,response) => {
    let like = await likeController.deleteLike(request.body);
    response.send ( like );
})



module.exports = router;