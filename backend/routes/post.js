const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const postController = require ("../controllers/post");

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})


router.get ( '/getPost', async (request,response) => {
    let post = await postController.getPost(request.body);
    response.send ( post )
})


// POST

router.post ( '/createPost', async (request,response) => {
    let post = await postController.createPost(request.body);
    response.send ( post )
})

// DELETE

router.delete ( '/deletePost', async (request,response) => {
    let post = await postController.deletePost(request.body);
    response.send ( post );
})



module.exports = router;