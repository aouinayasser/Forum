const { body, validationResult } = require('express-validator')

const jobSeekerRegisterRules=[
    body('firstname','First name is required').notEmpty(),
    body('lastname','Last name is required').notEmpty(),
    body('email','Enter a valid email').isEmail(),
    body('password')
                    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
                    .withMessage('Password should be combination of one uppercase , one lower case, one special character, one digit and between 8 and 20 characters long')
                    .notEmpty()
                    .withMessage('Password is required'),
    body('role','You must select a role').notEmpty()
]

const jobSeekerLoginRules=[
    body('email','Enter a valid email').isEmail(),
    body('password')
                    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
                    .withMessage('Password should be combination of one uppercase , one lower case, one special character, one digit and between 8 and 20 characters long')
                    .notEmpty()
                    .withMessage('Password is required')
]

const jobSeekerValidator=(req,res,next)=>{
    const result=validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).send(({errors:result.array()}))
    }
    next()
}

module.exports={jobSeekerRegisterRules,jobSeekerValidator,jobSeekerLoginRules}