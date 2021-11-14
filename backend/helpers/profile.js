const profile = require("../controllers/profile");
const dbClient = require("../util/database");

async function profileMethod (method,payload){
    try {
        await dbClient.connect();
        const database = dbClient.db("project_db");
        const profiles = database.collection("profiles");
        let query = {}
        switch (method) {
            case "GET_PROFILE":
                query = { userId: payload.id };
                profile = await profiles.findOne(query);
                return profile;
            case "CREATE_PROFILE":
                query = {
                    userId: payload.id
                };
                profile = await profiles.findOne(query);
                if ( !profile ){
                    profile = await profiles.insertOne (
                        {
                            
                            userId: payload.userId,
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
            case "UPDATE_PROFILE":
                query = {
                    userId: payload.id
                };
                
                update = {
                    $set: {},
                }
                if ( payload.updateInfo.avatar ) {
                    update.$set.avatar = payload.updateInfo.avatar;
                }
                if ( payload.updateInfo.birthday ) {
                    update.$set.birthday = payload.updateInfo.birthday;
                }
                if ( payload.updateInfo.bio ) {
                    update.$set.bio = payload.updateInfo.bio;
                }
                if ( payload.updateInfo.header ) {
                    update.$set.header = payload.updateInfo.header;
                }
                if ( payload.updateInfo.verfied ) {
                    update.$set.verfied = payload.updateInfo.verfied;
                }
                if ( payload.updateInfo.social ) {
                    update.$set.social = payload.updateInfo.social;
                }
                if ( payload.updateInfo.location ) {
                    update.$set.location = payload.updateInfo.location;
                }
                profile = await profiles.updateOne( query, update );
                return profile;
            default:
                return null;
        }
    } finally {
        await dbClient.close();
    }
}

module.exports = profileMethod;