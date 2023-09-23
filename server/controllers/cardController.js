// require the model
const db = require('../models/models.js')

const cardController = {};

cardController.getAllCards = (req, res, next) => {
    // define query that gets all the cards in the database
    const query = 'SELECT * FROM cards';

    // execute query
    db.query(query)
        .then(console.log('query started'))
        .then((result) => {
            console.log('result here: ', result.rows);
            return next();
        })
        .catch((err) => {
            return next({
                log: 'Unable to get cards.',
                message: {err: `ERROR: cardController.getAllCards - Unable to get cards from database. ${err}.`}
            });
        });
};

cardController.createCard = (req, res, next) => {
    // define query that adds one card based on the id passed from front end
    const query = 'INSERT INTO cards (word, definition) VALUES ($1, $2)'
    const values = ['james', 'cristina'];

    console.log('LOOK HERE', req.body);

    // execute query
    db.query(query, values)
        .then((result) => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'Unable to add card to database.',
                message: {err: `ERROR: cardController.createCard - Unable to add card to database. ${err}.`}
            });
        }); 
};

cardController.editCard = (req, res, next) => {
    // define query that overrides both the word and definition based on what's sent
    const query = "UPDATE cards SET (word, definition) = ($1, $2) WHERE id = $3";
    const values = ['apples', 'veggies', 2]
    // execute query
    db.query(query, values)
    .then((result) => {
        return next();
    })
    .catch((err) => {
        return next({
            log: 'Unable to edit card in database.',
            message: {err: `ERROR: cardController.editCard - Unable to edit card in database. ${err}.`}
        });
    }); 
};

cardController.deleteCard = (req, res, next) => {
    // write database query here
    const query = 'DELETE FROM cards WHERE id = $1'
    const values = [4];

    // execute query
    db.query(query, values)
    .then((result) => {
        return next();
    })
    .catch((err) => {
        return next({
            log: 'Unable to delete card in database.',
            message: {err: `ERROR: cardController.deleteCard - Unable to delete card in database. ${err}.`}
        });
    }); 
};

module.exports = cardController;