// ---------------------------------------------------------------------------------------------------
// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     connectionString: process.env.PG_URI
// });

// module.exports = {
//     query: (text, params, callback) => {
//         console.log('EXECUTED QUERY', text);
//         return pool.query(text, params, callback);
//     }
// };
// ---------------------------Previous team scratch project database using SQL ----------------------------
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
    {
        // catergory represents the topic of card (ie CLosure, recursion..)
        category: {
            type: String,
            required: true
        },

        question: {
            type: String,
            required: true
        },

        answer: {
            type: String,
            required: true
        },

        hint: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Card', CardSchema);
