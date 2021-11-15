const dbClient = require("../util/database");
const passwordHash = require('password-hash');
const profileController = require ('../controllers/profile');

async function auth (authType,payload){
    try {
        await dbClient.connect();
        const database = dbClient.db("project_db");
        const users = database.collection("users");
        let query = {}
        let user = null
        switch (authType) {
            case "CHECK_USER":
                query = { username: payload.username };
                user = await users.findOne(query);
                return user;
            case "CHECK_CREDENTIALS":
                query = { username: payload.username };
                user = await users.findOne(query);
                if ( user ){
                    if ( passwordHash.verify( payload.password, user.password ) ){
                        return user;
                    }else{
                        return "Check your credentials";
                    }
                }else{
                    return "Check your credentials";
                }
            case "CREATE_USER":
                query = {
                    $or:
                    [
                        { username: payload.username },
                        { email: payload.email }
                    ]
                };
                user = await users.findOne(query);
                if ( !user ){
                    hashedPassword = passwordHash.generate ( payload.password )
                    user = await users.insertOne (
                        {
                            _id: await users.estimatedDocumentCount() + 1,
                            username: payload.username,
                            email: payload.email,
                            password: hashedPassword,
                            name: payload.name,
                        }
                    )
                    if ( user ){
                        let prof = await profileController.createProfile({
                            userId: user.insertedId,
                            avatar: "",
                            birthday: "",
                            bio: "",
                            header: "",
                            verfied: false,
                            social: [],
                            location: "",
                        })
                        return user;
                    }else{
                        return "Ops";
                    }
                }else{
                    return "Email or Username already in use";
                }
            default:
                return null;
        }
    } finally {
        await dbClient.close();
    }
}

module.exports = auth;