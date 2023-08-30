const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users-router')
const gameRouter = require('./routes/games-router')
const app = express()
const PORT = 3001;

mongoose.connect("mongodb://localhost/", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => {console.log(err)});
db.once("open", ()=> {console.log("Mongoose successfully connected")})

app.use(express.json());
app.use("/users", userRouter);
app.use("/games", gameRouter)

app.listen(PORT, () => {
    console.log(`Now Listening on PORT ${PORT}`)
})