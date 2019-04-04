var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("C:/wyy_project/my_work/myNodeApp/views/" + "index.html" );
});

module.exports = router;
