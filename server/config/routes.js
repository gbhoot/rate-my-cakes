var cakes = require('../controllers/cakes.js'),
    reviews = require('../controllers/reviews.js');


module.exports = function(app) {
    // Get all the cakes
    app.get('/cakes', function(req, res) {
        cakes.getAll(req, res);
    });

    // Get one cake with specific id
    app.get('/cakes/:id', function(req, res) {
        cakes.getOne(req, res);
    });

    // Create new cake
    app.post('/cakes', function(req, res) {
        cakes.create(req, res);
    });

    // Get all the reviews
    app.get('/reviews', function(req, res) {
        reviews.getAll(req, res);
    });

    // Create new review for one cake with specific id
    app.post('/cakes/:id', function(req, res) {
        reviews.createReviewForCake(req, res);
    });
}