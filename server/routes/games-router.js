const express = require('express');
const gameRouter = express.Router();
const Game = require('../models/game-schema');
const User = require('../models/user-schema');

// GET ALL GAMES
gameRouter.get('/', async (req, res) => {
    try {
        const allGames = await Game.find();
        res.json(allGames)
    } catch(err) {
        res.send(500).json({ error: err })
    }
})


// NEW GAME
gameRouter.post("/", async (req, res) => {
    try {
        try {
        const newGame = new Game({
            score: req.body.score
        })
        const savedGame = await newGame.save();
        res.json(savedGame)
    } catch(err) {
        res.json({ error: err })
    }
    } catch(err) {
        res.json({ error: err })
    }
})

module.exports = gameRouter;