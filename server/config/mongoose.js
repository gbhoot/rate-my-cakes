var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakes');

module.exports = mongoose;