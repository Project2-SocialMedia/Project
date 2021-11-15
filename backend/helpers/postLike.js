const dbClient = require("../util/database");


async function likePost (method,payload){
    try {
        // await dbClient.connect();
        const database = dbClient.db("project_db");
        const postLikes = database.collection("posts_likes");


        switch (method) {
            case "GET_LIKE":
                postLike = await postLikes.find( payload.query );  
                return postLike ? postLike : "Error";

            case "CREATE_LIKE":
                postLike = await postLikes.insertOne(
                    {
                        user: payload.user, 
                        post: payload.post
                    }
                )
                return postLike ? postLike : "Error";

            case "DELETE_LIKE":
                   postLike = await postLikes.deleteOne({_id: payload.id})
                   return postLike === 1 ? "Declike" : "Error";

            default:
                return null ;
        }


    } finally {
        // await dbClient.close();
    }
}

module.exports = likePost;