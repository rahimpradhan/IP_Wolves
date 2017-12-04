var db = require("../models");

module.exports = function(app) {

    app.get("/api/ips", function(req, res) {
       // res.send("hello");

        db.IP.findAll({}).then(function(dbIP) {
            //console.log(dbIP);

            res.json(dbIP);
        });
    });

    app.get("/api/ips/latest",function (req, res) {
        db.IP.findAll({
            limit: 1,
            order: [['id', 'DESC']]
        }).then(function (dbIP) {
            res.json(dbIP);
            console.log(dbIP);
        });

    })

    app.put("/api/ips", function(req, res) {
        console.log(req.body.longitude);

        db.IP.update({

            longitude: req.body.longitude,
            latitude: req.body.latitude,
            city: req.body.city,
            country: req.body.country,
            state: req.body.state,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbIP) {
            res.json(dbIP);
        });
    });

}