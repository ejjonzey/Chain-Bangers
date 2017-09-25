const express = require('express');
const Course = require("../models/course");
const router = express.Router();

// index route
router.get("/", (req, res) => {
    Course.find().then((course) => {
        res.json(course);
    });
});

router.get("/:id", (req, res) => {
    Course.findById(req.params.id).then((course) => {
        res.json(course);
    });
});

router.put('/:courseId', (req, res)=>{
    console.log(req.body.name);
  const courseId = req.params.courseId;
  Course.findById(courseId).then((course)=>{
      ///Have a course

      //Take info from req.body and update existing course
      course.name = req.body.name;
      course.location = req.body.location;
      course.holes = req.body.holes;
      course.image = req.body.image;
      course.description = req.body.description;
      //Save updated course
    //   Course.push({courseId: course})
      course.save();
      res.send("course saved");
  })  
})


// POST route
router.post("/", (req, res)=>{
    console.log(req.body)
    const course = new Course();
    // const name = req.body.name;
    // const location = req.body.location;
    // const holes = req.body.holes;
    // const image = req.body.image;
    // const description = req.body.description;
    course.name = req.body.name;
    course.location = req.body.location;
    course.holes = req.body.holes;
    course.image = req.body.image;
    course.description = req.body.description;
    console.log(course)
    course.save().then(()=>{
    res.json(course);
    })
});

router.delete("/:course_id", (req, res)=>{
    Course.remove({_id: req.params.course_id}, function(err, course) {
        if (err)
        res.send(err);
        res.json({ message: "Course has been deleted" })
    })
});



module.exports = router;