// require the model
// const db = require('../models/cardSchema.js')
const Card = require('../models/cardSchema.js')

const cardController = {};

cardController.getCategoryCards = async (req, res, next) => {
    // define query that gets all the cards in the database
    // const query = 'SELECT * FROM cards';

    // // execute query
    // db.query(query)
    //     .then(console.log('query started'))
    //     .then((result) => {
    //         // console.log('result here: ', result.rows);
    //         res.locals.allCards = result.rows
    //         return next();
    //     })
    //     .catch((err) => {
    //         return next({
    //             log: 'Unable to get cards.',
    //             message: { err: `ERROR: cardController.getAllCards - Unable to get cards from database. ${err}.` }
    //         });
    //     });
    try {
        const { category } = req.params;
        const categoryList = await Card.find({ category }); //returns an array
        res.locals.categoryList = categoryList; //this is an array of all cards that match this category
        return next();
    }
    catch (err) {
        return next({
            log: 'Unable to find any matching categories.',
            message: { err: `ERROR: cardController.getCategoryCards - Unable to find any matching categories. ${err}.` }
        });
    }

};

cardController.getAllCards = async (req, res, next) => {

    try {
        const allCards = await Card.find({}); //returns an array
        res.locals.allCards = allCards; //this is an array of all cards that match this category
        return next();
    }
    catch (err) {
        return next({
            log: 'Unable to get all cards from the DB.',
            message: { err: `ERROR: cardController.getCategoryCards - Unable to find any matching cards. ${err}.` }
        });
    }

};

cardController.createCard = async (req, res, next) => {
    // define query that adds one card based on the id passed from front end
    // const query = 'INSERT INTO cards (word, definition) VALUES ($1, $2) RETURNING *'
    // // const values = ['james', 'cristina'];
    // const { word, definition } = req.body;
    // console.log('LOOK HERE FOR REQ BODY', req.body);

    // const values = [word, definition];

    // // execute query
    // db.query(query, values)
    //     .then((result) => {
    //         console.log('RESULT ROWS', result.rows);
    //         const { id, word, definition, user_id } = result.rows[0];
    //         res.locals.newCard = {
    //             id: id,
    //             word: word,
    //             definition: definition,
    //             user_id: user_id
    //         };
    //         console.log('LOOK HERE FOR NEW CARD', res.locals.newCard);
    //         return next();
    //     })
    //     .catch((err) => {
    //         return next({
    //             log: 'Unable to add card to database.',
    //             message: {err: `ERROR: cardController.createCard - Unable to add card to database. ${err}.`}
    //         });
    //     });

    try {
        let { category, question, answer } = req.body;
        let hint = '';
        if (req.body.hint) hint = req.body.hint;
        category = category.toUpperCase().trim();
        // if(/[^a-zA-Z\s]/.test(category)){
        // return res.status(400).json({ error: 'Category contains invalid characters.' })
        // }
        // [^a-zA-Z\s]

        const card = await Card.create({ category, question, answer, hint });
        res.locals.newCard = card;
        console.log('Created card is: ', card);
        return next()
    }

    catch (err) {
        return next({
            log: 'Unable to add card to database.',
            message: { err: `ERROR: cardController.createCard - Unable to add card to database. ${err}.` }
        });

    }

};

cardController.editCard = async (req, res, next) => {
    // define query that overrides both the word and definition based on what's sent
    // const query = "UPDATE cards SET (word, definition) = ($1, $2) WHERE id = $3";
    // const values = ['apples', 'veggies', 2]
    // // execute query
    // db.query(query, values)
    //     .then((result) => {
    //         return next();
    //     })
    //     .catch((err) => {
    //         return next({
    //             log: 'Unable to edit card in database.',
    //             message: { err: `ERROR: cardController.editCard - Unable to edit card in database. ${err}.` }
    //         });
    //     });

    const { id } = req.params;
    const filter = { _id: id };
    const { category, question, answer, hint } = req.body;
    const newState = {

        category: category,
        question: question,
        answer: answer,
        hint: hint

    };

    try {
        const updatedCard = await Card.findOneAndUpdate(filter, newState, {
            new: true
        });
        res.locals.updatedCard = updatedCard;
        return next();

    } catch (err) {
        return next({
            log: 'Unable to update card in database.',
            message: { err: `ERROR: cardController.updateCard - Unable to update card in database. ${err}.` }
        });
    }
};

cardController.deleteCard = async (req, res, next) => {
    // write database query here
    // const query = 'DELETE FROM cards WHERE id = $1'
    // const values = [4];

    // // execute query
    // db.query(query, values)
    //     .then((result) => {
    //         return next();
    //     })
    //     .catch((err) => {
    //         return next({
    //             log: 'Unable to delete card in database.',
    //             message: { err: `ERROR: cardController.deleteCard - Unable to delete card in database. ${err}.` }
    //         });
    //     });
    try {
        const { id } = req.params;
        const deleteCard = await Card.findOneAndDelete({ _id: id });

        return next();
    }
    catch (err) {
        return next({
            log: 'Unable to delete card in database.',
            message: { err: `ERROR: cardController.deleteCard - Unable to delete card in database. ${err}.` }
        });
    }



};

module.exports = cardController;