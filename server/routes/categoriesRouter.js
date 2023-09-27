const express = require('express');
const categoriesRouter = express.Router();
const Card = require('../models/cardSchema.js');
const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getCategories, async (req, res) => {
    res.status(200).json(res.locals.categories);
});

module.exports = categoriesRouter;