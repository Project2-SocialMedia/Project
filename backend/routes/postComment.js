const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const commentController = require ("../controllers/comment");

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})


router.get ( '/getComment', async (request,response) => {
    let post = await commentController.getComment(request.body);
    response.send ( post )
})


// POST

router.post ( '/createComment', async (request,response) => {
    let post = await commentController.createComment(request.body);
    response.send ( post )
})

// DELETE

router.delete ( '/deleteComment', async (request,response) => {
    let post = await commentController.deleteComment(request.body);
    response.send ( post );
})



module.exports = router;