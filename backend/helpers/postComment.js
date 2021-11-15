const dbClient = require("../util/database");


async function comment (method,payload){
    try {
        // await dbClient.connect();
        const database = dbClient.db("project_db");
        const comments = database.collection("posts_comments");
        let query = {}
        let comment = null

        switch (method) {
            case "GET_COMMENT":
                comment = await comments.find( payload.query );  
                return comment ? comment : "Error";

            case "CREATE_COMMENT":
                comment = await comments.insertOne(
                    {
                        user: payload.user, 
                        post: payload.post,
                        comment : payload.content,
                        date: new Date()
                    }
                )
                return comment ? comment : "Error";

            case "DELETE_COMMENT":
                   comment = await comments.deleteOne({_id: payload.id})
                   return comment === 1 ? "Deleted" : "Error";

            default:
                return null ;
        }


    } finally {
        // await dbClient.close();
    }
}

module.exports = comment;