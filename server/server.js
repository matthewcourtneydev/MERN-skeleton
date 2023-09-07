require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userRouter = require("./routes/users-router");
const gameRouter = require("./routes/games-router");
const User = require('./models/user-schema');
const app = express();
const PORT = 3001;

mongoose.connect("mongodb://localhost/", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Mongoose successfully connected");
});

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/users", userRouter);
app.use("/games", gameRouter);


app.post("/login", async (req, res) => {
  const requestEmail = req.body.email;
  const user = { email: requestEmail };

//   NEED TO CROSS REFRENCE USER findOne()
try {
    const calledUser = await User.findOne({email: req.body.email}).populate('gamesWon').exec();
    if (calledUser) {
        const createdAccessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.send({ accessToken: createdAccessToken, user: calledUser });
    } else {
        res.json({error: "ERROR USER NOT FOUND"})
    }
}catch(err) {
    res.json({ error: err})
}
});

app.listen(PORT, () => {
  console.log(`Now Listening on PORT ${PORT}`);
});
