const dbClient = require("../util/database");


async function post (method,payload){
    try {
        await dbClient.connect();
        const database = dbClient.db("project_db");
        const posts = database.collection("posts");
        let query = {}
        let post = null

        switch (method) {
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
                
                break;
            default:
                break;
        }




    } finally {
        await dbClient.close();
    }
}

module.exports = post;