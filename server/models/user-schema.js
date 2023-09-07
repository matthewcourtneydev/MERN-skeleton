const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Game = require('../models/game-schema');

userSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String},
    username: { type: String},
    gamesWon: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
})

module.exports = mongoose.model("User", userSchema)