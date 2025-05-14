const express = require('expresss')
const {check,validationResult} = require('express-validator')
const app = express()
app.use(express.json)

app.post('/submit',[
    check('name')
    .isEmpty().withMessage('Name must not be empty')
    .isLength({min:3}).withMessage('Name must have 3 characters')
    .trim().withMessage('No whitespaces at start or end are are allowed')
    .escape().withMessage('Name contain invalid characters'),

    check('email')
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail(),

    check('password')
    .isLength({min:9,max:15}).withMessage('Password must be of 9 chars atleast and 15 chars atmost')
    .matches('/d/').withMessage('Password must contain atleast one digit')
    .matches('[/*<>,.#$^()!{}]').withMessage('Password must contain atleast one special char')
],(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return  res.send(422).json({errors:errors.array()})
    }
    next()
})