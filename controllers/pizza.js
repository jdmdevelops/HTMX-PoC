const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/cheese", (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/pizza.html"));
});

module.exports = router;
