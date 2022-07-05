const { mainrouter } = require('./routes/main');
const { Transactionrouter } = require('./routes/transaction');
module.exports = (app) => {
    
  app.use(mainrouter);
  app.use('/compute', Transactionrouter);

  
};
