const mongoose = require('mongoose');

// Connect to the MongoDB database at the specified UR
mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
