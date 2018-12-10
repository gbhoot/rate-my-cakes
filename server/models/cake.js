var mongoose = require('../config/mongoose.js'),
    validators = require('mongoose-validators'),
    ReviewSchema = require('./review.js').schema;

var CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, 
        validate: [validators.isAlpha(), validators.isLength(3)]},
    img_url: {type: String, required: true, 
        validate: [validators.isURL()]},
    reviews: [ReviewSchema],
},{timestamps: true});

var Cakes = mongoose.model('Cake', CakeSchema);

module.exports = Cakes;