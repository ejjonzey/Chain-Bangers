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

router.delete((req, res)=>{
    course.remove({_id: req.params.course_id}, function(err, course) {
        if (err)
        res.send(err);
        res.json({ message: "Course has been deleted" })
        })
        });



module.exports = router;