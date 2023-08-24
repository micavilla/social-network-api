const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:mica@cluster0.tghs7n5.mongodb.net/socialNetworkDB');

module.exports = connection;
