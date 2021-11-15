const dbClient = require("../util/database");


async function blockUsers (method,payload){
    try {
        // await dbClient.connect();
        const database = dbClient.db("project_db");
        const blockUser = database.collection("block_User");


        switch (method) {
            case "GET_BLOCK":
                block = await blockUser.find( payload.query );  
                return block ? block : "Error";

            case "BLOCK":
                block = await blockUser.insertOne(
                    {
                        user: payload.user, 

                    }
                )
                return block ? block : "Error";

            case "UNBLOCK":
                   block = await blockUser.deleteOne({_id: payload.id})
                   return block === 1 ? "Blocked" : "Error";

            default:
                return null ;
        }


    } finally {
        // await dbClient.close();
    }
}

module.exports = blockUsers;