const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send({ response: "Classroom Socket Listening" }).status(200);
});
module.exports = router;