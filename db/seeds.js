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

const Admin = new User({
    first_name: 'Eric',
    last_name: 'Jonelunas',
    username: 'Ejjonzey',
    password: "12345",
    admin: True
})

const Hole = new Hole1({
    number: '1',
    distance: '350',
    par: '3',
    pinlocation: 'A'
})

const Hole = new Hole2({
    number: '2',
    distance: '350',
    par: '3',
    pinlocation: 'A'
})

const Hole = new Hole3({
    number: '3',
    distance: '350',
    par: '3',
    pinlocation: 'A'
})

const Hole = new Hole4({
    number: '4',
    distance: '350',
    par: '3',
    pinlocation: 'A'
})

const Hole = new Hole5({
    number: '5',
    distance: '350',
    par: '3',
    pinlocation: 'A'
})

Alexander.save().then(()=> console.log("Course Saved!"));
Redan.save().then(()=> console.log("Course Saved!"));
EastRoswell.save().then(()=> console.log("Course Saved!"));

Hole1.save().then(()=> console.log('Hole1 saved!'));
Hole2.save().then(()=> console.log('Hole2 saved!'));
Hole3.save().then(()=> console.log('Hole3 saved!'));
Hole4.save().then(()=> console.log('Hole4 saved!'));
Hole5.save().then(()=> console.log('Hole5 saved!'));

Admin.save().then(()=> console.log("Admin saved"));

mongoose.connection.close();