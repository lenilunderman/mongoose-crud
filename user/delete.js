'use strict'
// created an config file to shorten the number of lines for the database connection
const config = require('../config')
const { db } = require('../models/user')

//* require the schemafor the database
const User = require('../models/user')

//* get the data to be used in the query to delete
const userID = process.argv[2]

//* connect to the database
db.once('open', function () {
    User.findById(userID)
        .then(person => {
            return person.deleteOne()
        })
        // print that the user has been deleted.
        .then(person => {
            console.log('Success, the user has been deleted. \n', person)
        })
        .catch(console.error)
        // close the connection
        .finally(() => db.close())

})

//query example: node user/delete.js 5f20d9dd30f25c05744ee1c1