const mongoose = require("mongoose");

const CommentSchema = mongoose.schema({
    posterId: String,
    date: {type: Date, default: Date},
    comment: String
});

const HoleSchema = mongoose.schema({
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
    date_added: Date
});

const UserSchema = mongoose.schema({
    first_name: String,
    last_name: String,
    user_id: String,
    user_name: String
});

const DiscSchema = mongoose.schema({
    brand_name: String,
    line_name: String,
    weight: Number,
    color: String,
    comment: [CommentSchema]
});



CourseSchema.pre('save', function(next){
    let now = new Date();
    if(!this.date_added){
        this.date-added = now;
    }
    next()
})

var CommentModel = mongoose.model('Comment', CommentSchema);
var CourseModel = mongoose.model('Course', CourseSchema);
var HoleModel = mongoose.model('Hole', HoleSchema);
var userModel = mongoose.model('User', UserSchema);

module.exports = {
    Comment: CommentModel,
    Course: CourseModel,
    Hole: HoleModel,
    User: UserModel
}