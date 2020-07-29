'use strict'
const mongoose = require('mongoose')
// tell mongoose to use promises.
mongoose.Promise = global.Promise
//* connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/leni-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//* saving the connection between mongoose and mongodb
const db = mongoose.connection

// requiring the model schema to be used.
const User = require('../models/user')

//open the database and do the operations
db.once('open', function () {
    User.find()
        //returns a promise than can be used to access the data
        .then(data => {
            data.forEach(usr => {
                console.log(usr.toJSON())
            })
        })
        .catch(console.error)
        .finally(() => db.close())
})