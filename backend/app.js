const dbClient = require("./util/database");

const authHelper = require("./helpers/auth");
//checkCredentials
//let checked = authHelper.a ( "basel", 123 );
authHelper("CHECK_USER",{username: "basel"}).then(
    
    (first) => console.log(first)
    )