const express = require('express');
const Transactionrouter = express.Router();
const { transaction } = require('../controllers/transaction');

Transactionrouter.post('/compute', transaction);



module.exports = { Transactionrouter };
