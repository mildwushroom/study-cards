const express = require('express');
const cardController = require('../controllers/cardController.js');
const cardRouter = express.Router();

cardRouter.get('/', cardController.getAllCards, (req, res) => {
    res.status(200).send('GET request to cards made successfully!');
});

cardRouter.post('/', cardController.createCard, (req, res) => {
    res.status(200).send('POST request to cards made successfully!');
});

cardRouter.patch('/', cardController.editCard, (req, res) => {
    res.status(200).send('PATCH request to cards made successfully!');
});

cardRouter.delete('/', cardController.deleteCard, (req, res) => {
    res.status(200).send('DELETE request to cards made successfully!');
});

module.exports = cardRouter;