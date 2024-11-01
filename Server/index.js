const express = require('express')
const app = express()
app.use(express.json())
const db = require("./models");

// Routers
const postRouter = require('./routes/Posts') // made my app crash
app.use("/posts", postRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    });
});
