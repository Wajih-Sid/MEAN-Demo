var mongoose = require('mongoose');
mongoose.connect('mongodb://wajih:wajih@ds035995.mongolab.com:35995/multivision');
module.exports = mongoose.connection;