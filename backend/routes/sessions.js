const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const sessionController = require ("../controllers/sessions");

// GET

router.get ( '/', (request,response) => {
    response.send ( request.body );
})

// POST

router.post ( '/updateSession', async (request,response) => {
    let session = await sessionController.updateSession(request.body);
    response.send ( session )
})

router.get ( '/getSession', async (request,response) => {
    let session = await sessionController.getSession(request.query);
    response.send ( session )
})


router.delete ( '/deleteSession', async (request,response) => {
    let session = await sessionController.deleteSession(request.body);
    console.log(request.body)
    response.send ( session )
})
module.exports = router;