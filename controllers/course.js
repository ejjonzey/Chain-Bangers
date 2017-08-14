const express = require('express');
const Course = require("../models/course");
const router = express.Router();

router.get("/", (req, res) => {
    Course.find().then((course) => {
        res.json(course);
    });
});

router.post("/", (req, res)=>{
    const name = req.body.name;
    const location = req.body.location;
    const holes = req.body.holes;
    const image = req.body.image;
    const description = req.body.description;
    const course = new Course();
    course.name = name;
    course.location = location;
    course.holes = holes;
    course.image = image;
    course.description = description;
    course.save().then(()=>{
        console.log("save new course");
    })
});

router.delete('/EditCourse/id', (req, res)=>{
    console.log("hello from delete")
})



module.exports = router;