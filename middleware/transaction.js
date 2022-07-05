const joi = require("joi");
const { Utils } = require("./utils");
const utils = new Utils();

const validation = joi.object({
    ID: joi.number().required(),
    amount: joi.number().required(),
    currency: joi.string().required(),
    email: joi.string().email().trim(true).required(),
    // SplitInfo: array().unique(SplitEntityId).required()
});

const transactionValidation = async (req, res, next) => {
    try {
      const validated = validation.validate(req.body);
      if (validated.error) {
        res.status(400);
        return res.json({
          error: utils.getMessage("DATA_VALIDATION_ERROR"),
        });
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };