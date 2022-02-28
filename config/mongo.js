const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        console.log('Mongo');
        if (err) {
            console.log(err);
        }
        else {
            console.log('*** DB Successfully connected. ***');
        }
    });
}

module.exports = { dbConnect }