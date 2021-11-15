const dbClient = require("../util/database");

async function sessionF (sessionMethod,payload){
    try {
        const database = dbClient.db("project_db");
        const sessions = database.collection("sessions");
        let query = {};
        let dbSession = null;
        switch (sessionMethod) {
            case "GET":
                query = {
                    token: payload.token
                }
                dbSession = await sessions.findOne ( query );
                return dbSession;
                dbSession = await sessions.insertOne ( payload );
                return dbSession;
            case "DELETE":
                query = {
                    token: payload.token
                }
                dbSession = await sessions.deleteOne ( query );
                return dbSession;
            case "UPDATE":
                query = {
                    token: payload.token
                };
                
                update = {
                    $set: {},
                }
                Object.entries(payload.updateInfo).forEach ( ( entry ) => {
                    const [ key, value ] = entry;
                    update.$set[key] = value;
                })
                dbSession = await sessions.updateOne( query, update );
                return dbSession;
            default:
                return null;
        }
    } finally {
        //await dbClient.close();
    }
}

module.exports = sessionF;