var Review = require('../models/review.js'),
    Cake = require('../models/cake.js');

module.exports = {
    getAll: function(req, res) {
        Review.find({}, function(error, reviews) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    reviews: reviews
                };
                res.json(response);
            }
        });
    },

    createReviewForCake: function(req, res) {
        let inc_rev = req.body;
        let cid = req.params.id;
        let review = new Review(inc_rev);
        review.save(function(error, new_review) {
            if (error) {
                console.log(error);
                res.json(error);
            } else {
                Cake.findOneAndUpdate({_id: cid}, {$push: 
                    {reviews: review}}, function(error, cake) {
                    let response = {
                        message: "Success",
                        cake: cake
                    };
                    res.json(response);
                });
            }
        });
    },

    destroy: function(req, res) {
        Review.deleteMany({}, function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success"
                };
                res.json(response);
            }
        });
    }
}