const express = require('express');
const app = express();
let cors = require('cors')
let morgan = require('morgan');


const auth = require('./routes/auth')
const post = require('./routes/post')
const comment = require('./routes/comment')
const profile = require('./routes/profile')
const like = require('./routes/postLike')
const follow = require('./routes/follow')
const block = require('./routes/blockUser')


app.use(express.json());
app.use(cors())
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


app.listen ( 8000, (errorCallback) => {
    errorCallback 
    ? console.error( errorCallback )
    : console.log ( `Server Started http://localhost:8000` )
})