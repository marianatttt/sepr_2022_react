import Joi from "joi";

const commentValidator = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    body:Joi.string().required()
})

export {
    commentValidator
}