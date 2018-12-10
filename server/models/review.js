var mongoose = require('../config/mongoose.js'),
    validators = require('mongoose-validators');

var ReviewSchema = new mongoose.Schema({
    comment: {type: String, required: true,
        validate: [validators.isLength(5)]},
    rating: {type: Number, required: true, min: 0, max: 5,
        validate: [validators.isNumeric()]}
},{timestamps: true});

var Reviews = mongoose.model('Review', ReviewSchema);

module.exports = Reviews;   