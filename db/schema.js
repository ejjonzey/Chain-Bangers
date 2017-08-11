const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    posterId: String,
    date: {type: Date, default: Date},
    comment: String
});

const HoleSchema = mongoose.Schema({
    number: Number,
    distance: Number,
    par: Number,
    pinLocation: String
});

const CourseSchema = mongoose.Schema({
    name: String,
    location: String,
    holes: Number,
    total_distance: Number,
    total_par: Number,
    image: String,
    description: String,
    comment: [CommentSchema],
    date_set: Date
});

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    user_id: String,
    username: String,
    password: String,
    admin: Boolean,
});

const DiscSchema = mongoose.Schema({
    brand_name: String,
    line_name: String,
    weight: Number,
    color: String,
    comment: [CommentSchema]
});



CourseSchema.pre('save', function(next){
    let now = new Date();
    if(!this.date_set){
        this.date_set = now;
    }
    next()
})

UserSchema.pre('save', function(next){
    if(!this.admin){
        this.admin = false;
    }
    next();
})

var CommentModel = mongoose.model('Comment', CommentSchema);
var CourseModel = mongoose.model('Course', CourseSchema);
var HoleModel = mongoose.model('Hole', HoleSchema);
var UserModel = mongoose.model('User', UserSchema);

module.exports = {
    Comment: CommentModel,
    Course: CourseModel,
    Hole: HoleModel,
    User: UserModel
}