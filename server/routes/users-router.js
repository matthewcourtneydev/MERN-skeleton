const express = require('express');
const userRouter = express.Router();
const User = require('../models/user-schema');

// GET ALL USERS
userRouter.get('/', async (req, res) => {
    try {
        const usersList = await User.find();
        res.json(usersList)
    } catch (err) {
        res.send(500).json({error: err})
    }
})

// MAKE A USER
userRouter.post('/', async (req, res, next) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedUser = await newUser.save();
        res.json(savedUser)
    } catch(err) {
        res.send("User Creation Failed")
    }
})

// GET ONE USER
userRouter.get('/:id', async (req, res) => {
    try {
        const calledUser = await User.findById(req.params.id).populate('gamesWon').exec();
        res.json(calledUser)
    }catch(err) {
        res.json({ error: err})
    }
})

// UPDATE ONE USER
userRouter.patch('/:id', getUser, async (req, res) => {
    if (req.body.gameId !== null) {
        res.user.gamesWon = [...res.user.gamesWon, req.body.gameId]
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser)
    } catch(err) {
        res.json({ error: err })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(400).json({ error: "user not found"})
        };
    } catch(err) {
        res.json({ error: err })
    }

    res.user = user;
    next();
} 


module.exports = userRouter;