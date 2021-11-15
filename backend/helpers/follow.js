const dbClient = require("../util/database");


async function followUser (method,payload){
    try {
        // await dbClient.connect();
        const database = dbClient.db("project_db");
        const followers = database.collection("follow_user");


        switch (method) {
            case "GET_FOLLOWERS":
                follow = await followers.find( payload.query );  
                return follow ? follow : "Error";

            case "FOLLOW":
                follow = await followers.insertOne(
                    {
                        follower: payload.follower, 
                        following: payload.following
                    }
                )
                return follow ? follow : "Error";

            case "UNFOLLOW":
                follow = await followers.deleteOne({follower: payload.follower})
                   return follow === 1 ? "Unfollow" : "Error";

            default:
                return null ;
        }


    } finally {
        // await dbClient.close();
    }
}

module.exports = followUser;