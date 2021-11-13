const express = require('express');
const router = express.Router();
const authController = require ("../controllers/auth");
// GET

router.get ( '/login', (request,response) => {
    const login = authController.login()
    response.send ( postsArray );
})

// POST

router.post ( '/', (request,response) => {
    let postData = request.body;
    let addedPost = {
        "id": ++postsArray.length,
        "title": postData.title,
        "content": postData.content
    }
    postsArray.push(addedPost);
    var filteredArray = postsArray.filter(function (el) {
        return el != null;
    });
    fileHandler.writeFile ( __dirname + '/../json/posts.json', JSON.stringify(filteredArray,null, '\t'), (error) => 
        {
            if ( error ) throw error; 
            response.send(
                {
                    "addedPost": addedPost,
                    "postsArray": postsArray
                }
                ); 
        }
    )
})

module.exports = router;