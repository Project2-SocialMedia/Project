const dbClient = require("../util/database");

async function profileMethod (method,payload){
    try {
        await dbClient.connect();
        const database = dbClient.db("project_db");
        const profiles = database.collection("profiles");
        let query = {}
        switch (authType) {
            case "GET_PROFILE":
                query = { userId: payload.id };
                profile = await profiles.findOne(query);
                return profile;
            case "CREATE_PROFILE":
                query = {
                    $or:
                    [
                        { userId: payload.id },
                    ]
                };
                profile = await profiles.findOne(query);
                if ( !profile ){
                    profile = await profiles.insertOne (
                        {
                            
                            userId: payload.id,
                            avatar: payload.avatar,
                            birthday: payload.birthday,
                            bio: payload.bio,
                            header: payload.header,
                            verfied: payload.verfied,
                            social: payload.social,
                            location: payload.location,
                        }
                    )
                    return profile ? profile : "Error";
                }else{
                    return "User already have a profile";
                }
            default:
                return null;
        }
    } finally {
        await dbClient.close();
    }
}

module.exports = profileMethod;