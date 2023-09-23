const express = require('express');
const cardsController = require('../controllers/cardController');
const cardRouter = express.Router();

cardRouter.get('/', cardsController.getAllCards, (req, res) => {
    res.status(200).send('GET request to cards made successfully!');
});

cardRouter.post('/', cardsController.createCard, (req, res) => {
    res.status(200).send('POST request to cards made successfully!');
});

cardRouter.patch('/', cardsController.editCard, (req, res) => {
    res.status(200).send('PATCH request to cards made successfully!');
});

cardRouter.delete('/', cardsController.deleteCard, (req, res) => {
    res.status(200).send('DELETE request to cards made successfully!');
});

module.exports = cardRouter;