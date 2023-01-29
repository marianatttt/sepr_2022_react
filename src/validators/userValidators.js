import Joi from "joi";

const userValidators = Joi.object({

    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required()

})
export {
    userValidators
}