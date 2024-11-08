const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => { //to test
  const { username,   password } = req.body;
  bcrypt.hash(password, 10).then((hash) =>
  {
    Users.create({ 
        username: username, //we do not handle dupes
        password: hash,
    });
    res.json("Success")
 
  });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username } }); // findone - lazy approach

    if (!user) {
        res.json({   
 error: "User Doesn't Exist" }); // noy12, hacker: noy13
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res.json({ error: "Wrong Username And Password Combination" });
            } else {
                res.json("YOU   LOGGED IN!!!");
            }
        });
    }
});

module.exports = router;


// הרשמה noy 1234 -> noy jkasdlkajsjdklf@!!@!#44512
// התחברות noy 123 -> noy jkasdlkajsjdklf@!!@!#423213