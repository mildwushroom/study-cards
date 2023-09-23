const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cardRouter = require('./routes/cardRouter.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serves HTML file to render the whole app
app.use('/', express.static(path.resolve(__dirname, '../dist')));

/* ROUTERS */
// router for any requests made for cards
app.use('/api/cards', cardRouter);


/* ERROR HANDLERS */

// 404 eror handler
app.use('*', (req,res) => {
    res.status(404).send('Page not found.');
})

// Global error handler
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Global error handler caught an error somewhere.',
        status: 500,
        message: { error: 'You hit the global error. Unknown middleware error.'} 
    };
    const modifiedErrorObj = Object.assign(defaultError, err);
    return res.status(modifiedErrorObj.status).json(modifiedErrorObj.message);
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;