/**
 * Creating a connectionn to mongodb
 * Start a local mongodb server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

// Create the connection function
const connectDB = async () => {
    try {
       await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

         console.log("MongoDB Connected...")

        } catch (err) {
        console.error(err.message);

        process.exit(1);
    }
}

module.exports = connectDB;