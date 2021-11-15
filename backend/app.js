const express = require('express');
const app = express();
let cors = require('cors')
let morgan = require('morgan');
const sessions = require('express-session');


app.use(
    sessions(
        {
            secret: "s3cr3tk3y",
            saveUninitialized:true,
            cookie: { maxAge: 1000 * 60 * 60 * 24 },
            resave: false
        }
    )
);

const auth = require('./routes/auth')
const post = require('./routes/post')
const comment = require('./routes/postComment')
const profile = require('./routes/profile')
const like = require('./routes/postLike')
const follow = require('./routes/follow')
const block = require('./routes/blockUser')

app.use(express.json());

app.use(morgan('dev'));

// Use Routes

app.use ( '/auth', auth )
app.use ( '/post', post )
app.use ( '/comment', comment )
app.use ( '/profile', profile )
app.use ( '/postLike', like )
app.use ( '/follow', follow )
app.use ( '/block', block )

app.get('/', (request,response) => {
    response.send ("Home page")
})


app.listen ( 3001, (errorCallback) => {
    errorCallback 
    ? console.error( errorCallback )
    : console.log ( `Server Started http://localhost:3001` )
})