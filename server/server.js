const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
<<<<<<< HEAD
const cardRouter = require('./routes/cardRouter.js');
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://pkarwe62:JFZBtUu007N2kkwN@cluster0.ru954su.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
=======
const cardRouter = require('./routes/cardRouter.js')
const categoriesRouter = require('./routes/categoriesRouter')
>>>>>>> 632f9399bfbc22fe7b65663b3c35ac7ab4031dba

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serves HTML file to render the whole app
app.use('/', express.static(path.resolve(__dirname, '../dist')));

/* ROUTERS */
// router for any requests made for cards
app.use('/api/cards', cardRouter);
app.use('/api/categories', categoriesRouter);


/* ERROR HANDLERS */

// 404 eror handler
app.use('*', (req, res) => {
    res.status(404).send('Page not found.');
});

mongoose.connect("mongodb+srv://pkarwe62:JFZBtUu007N2kkwN@cluster0.ru954su.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Successfully connected to MongoDB!");
});

// Global error handler
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Global error handler caught an error somewhere.',
        status: 500,
        message: { error: 'You hit the global error. Unknown middleware error.' }
    };
    const modifiedErrorObj = Object.assign({}, defaultError, err);
    console.log(modifiedErrorObj.log);
    return res.status(modifiedErrorObj.status).json(modifiedErrorObj.message);
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;