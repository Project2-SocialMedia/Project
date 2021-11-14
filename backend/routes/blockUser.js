const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const blockController = require ("../controllers/blockUser");

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})


router.get ( '/getBlock', async (request,response) => {
    let block = await blockController.getBlock(request.body);
    response.send ( block )
})


// POST

router.post ( '/blocks', async (request,response) => {
    let block = await blockController.blocks(request.body);
    response.send ( block )
})

// DELETE

router.delete ( '/unblock', async (request,response) => {
    let block = await blockController.unblock(request.body);
    response.send ( block );
})



module.exports = router;