var express = require('express');
var router = express.Router();
var db = require("./db.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  db.query('select * from users where name="admin"', function (err, rows) {
        if (err) {
            res.send('query error');  // this renders "views/users.html"
        } else {
            res.send(rows);
        }
  });
});

module.exports = router;
