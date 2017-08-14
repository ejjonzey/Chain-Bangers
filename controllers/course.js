const express = require('express');
const Course = require("../models/course");
const router = express.Router();

router.get("/", (req, res) => {
    Course.find().then((course) => {
        res.json(course);
    });
});


module.exports = router;