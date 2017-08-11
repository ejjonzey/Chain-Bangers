
const express = require('express');
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.post("/login/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.find().then((users) => {
        const wantedUser = users.find((user) => {
            return user.username === username
        })
        if (wantedUser.password === password){
            res.json(wantedUser);
        } else {
            res.send("wrong password")
        }
        res.json(wantedUser);
    })
        .catch((err) => {
            res.send("No such username");
        })
})
module.exports = router;