var Cake = require('../models/cake.js');

module.exports = {
    getAll: function(req, res) {
        Cake.find({}, function(error, cakes) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    cakes: cakes
                };
                res.json(response);
            }
        });
    },

    getOne: function(req, res) {
        let cid = req.params.id;
        Cake.find({_id: cid}, function(error, cake) {
            if (error) {
                console.log(error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    cake: cake
                };
                res.json(response);
            }
        });
    },

    create: function(req, res) {
        let inc_cake = req.body;
        let cake = new Cake(inc_cake);
        cake.save(function(error, new_cake) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    cake: new_cake
                };
            }
        });
    }
}