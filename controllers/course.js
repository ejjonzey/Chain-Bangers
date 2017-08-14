const express = require('express');
const Course = require("../models/course");
const router = express.Router();

router.get("/", (req, res) => {
    Course.find().then((course) => {
        res.json(course);
    });
});

router.post("/Course", (req, res)=>{
    const name = req.body.name;
    const location = req.body.location;
    const holes = req.body.holes;
    const image = req.body.image;
    const description = req.body.description;
    Course.find().then((course)=>{
        res.json(course);
    });
});


module.exports = router;