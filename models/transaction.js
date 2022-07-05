const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const TransactionSchema = new Schema({
    ID: {
        type: Number,
        required: true
    },
    amount: {
        type:Number,
        required: true
    },
    currency : {
       type: String,
       required: true
    },
    CustomerEmail : {
        type: String,
        required: true
    },
    SlitInfo: [
        {
            SplitType: { type: String, required: true },
            SplitValue: { type: Number, required: true },
            SplitEntityId: { type: String, unique: true, required: true },
        }
    ]

});

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = { Transaction };