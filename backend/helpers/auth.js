const dbClient = require("../util/database");

async function auth (authType,payload){
    try {
        await dbClient.connect();
        const database = dbClient.db("project_db");
        const users = database.collection("users");
        switch (authType) {
            case "CHECK_USER":
                const query = { username: payload.username };
                const user = await users.findOne(query);
                return user;
            default:
                return "huh?";
        }
    } finally {
        await dbClient.close();
    }
}

module.exports = auth;