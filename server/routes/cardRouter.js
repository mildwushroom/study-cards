const express = require('express');
const cardController = require('../controllers/cardController.js');
const cardRouter = express.Router();

//endpoint to GET all cards for a given category
cardRouter.get('/:category', cardController.getCategoryCards, (req, res) => {
    // console.log('RESULT ROWS', res.locals.allCards);
    res.status(200).json(res.locals.categoryList);
});

//endpoint to GET ALL cards in database
cardRouter.get('/', cardController.getAllCards, (req, res) => {
    // console.log('RESULT ROWS', res.locals.allCards);
    res.status(200).json(res.locals.allCards);
});

//add a card to the database
cardRouter.post('/', cardController.createCard, (req, res) => {
    // console.log('NEW CARD IS HERE', res.locals.newCard);
    res.status(200).json(res.locals.newCard);
});

//update a card in the database
cardRouter.put('/:id', cardController.editCard, (req, res) => {
    res.status(200).json(res.locals.updatedCard); //previously patch
});

cardRouter.delete('/:id', cardController.deleteCard, (req, res) => {
    res.status(200).send('DELETE request to cards made successfully!');
});

module.exports = cardRouter;