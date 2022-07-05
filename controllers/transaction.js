const { Transaction } = require("../models/transaction");


const transaction = async (req, res) => {
    // try {
    //     newTransaction = await Transaction({
    //         ID: req.body.ID,
    //         amount: req.body.amount,
    //         currency: req.body.currency,
    //         CustomerEmail: req.body.CustomerEmail,
    //         SplitInfo: req.body.SplitInfo
    //     }).save();

    //     const Intial_Balance = amount;
    //     const split_amount = SlitInfo.SplitValue;
    //     console.log(split_amount)
    //     if (Intial_Balance == amount){

    //     }
        

    // } catch (error) {
        
    // }

    res.json({ status: true, message: 'The API is fully functional' });
}

module.exports = { 
    transaction,
}