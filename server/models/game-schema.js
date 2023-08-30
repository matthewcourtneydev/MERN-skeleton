const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user-schema');

gameSchema = new mongoose.Schema({
    score: { type: Number }
})


module.exports = mongoose.model("Game", gameSchema)