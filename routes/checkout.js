const express = require('express');
const router  = express.Router();

module.exports = (db) => {

 
  router.get("/", (req, res) => {      // non-AJAX route; returns full page of HTML
    res.render("checkout");
  });
  router.post("/add-cart",(req, res) => {
   console.log(req.body);
  });



  return router;
};

