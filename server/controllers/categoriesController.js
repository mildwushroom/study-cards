const Card = require('../models/cardSchema.js')

const categoriesController = {};

categoriesController.getCategories = async (req, res, next) => {
    try {
        const categories = await Card.find({}, 'category');
        res.locals.categories = [...new Set(categories.map(obj => obj.category))];
        // maps the array of objects to extract the .category property,
        // and removes duplicates by spreading from a Set
        return next();
    }
    catch (err) {
        return next(err);
    }
}

module.exports = categoriesController;