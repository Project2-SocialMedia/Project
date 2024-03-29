const dbClient = require("../util/database");


async function post (method,payload){
    try {
        await dbClient.connect();
        const database = dbClient.db("project_db");
        const posts = database.collection("posts");
        let query = {}
        let post = null

        switch (method) {
            case "GET_POST":
                post = await posts.find( payload.query );  
                return post ? post : "Error";

            case "CREATE_POST":
                post = await posts.insertOne(
                    {
                        user: payload.user, 
                        content : payload.content,
                        media: payload.media,
                        date: new Date(),
                    }
                )
                return post ? post : "Error";

            case "DELETE_POST":
                   post = await posts.deleteOne({_id: payload.id})
                   return post === 1 ? "Deleted" : "Error";

            default:
                return null ;
        }


    } finally {
        await dbClient.close();
    }
}

module.exports = post;