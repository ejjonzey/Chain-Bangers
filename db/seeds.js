require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var UserComment = require('../models/comment');
var Course = require('../models/course');
var Hole = require('../models/hole');
var User = require('../models/user');

mongoose.promise = global.Promise;

const Alexander = new Course({
    name: "Alexander",
    location: "Lawrenceville",
    holes: '18',
    description: "A balanced mix of wide open field holes with scattered trees and short-moderate length fairways in the woods. Lots of in and out of the woods play. Can play from really short to average length depending on pin position and tee used. Pond in play on 17",
})

const Redan = new Course({
    name: "Redan",
    location: "Stone Mountain",
    holes: '18',
    description: "A balanced mix of wide open field holes with scattered trees and short-moderate length fairways in the woods. Lots of in and out of the woods play. Can play from really short to average length depending on pin position and tee used. Pond in play on 17",
})

const EastRoswell = new Course({
    name: "East Roswell",
    location: "Dekalb",
    holes: '18',
    description: "A balanced mix of wide open field holes with scattered trees and short-moderate length fairways in the woods. Lots of in and out of the woods play. Can play from really short to average length depending on pin position and tee used. Pond in play on 17",
})

const admin = new User({
    first_name: 'Eric',
    last_name: 'Jonelunas',
    username: 'Ejjonzey',
})

Alexander.save().then(()=> console.log("Course Saved!"));
Redan.save().then(()=> console.log("Course Saved!"));
EastRoswell.save().then(()=> console.log("Course Saved!"));

admin.save().then(()=> console.log("Admin saved"));

mongoose.connection.close();