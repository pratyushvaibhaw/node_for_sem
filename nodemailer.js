const Mailgen = require('nodemailer')
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.post('/sendMail',async(req,res)=>{
    const mailgenerator = new MailGenerator({
        theme:'default',
        product:{
            name:'Some company',
            link:'https//some.company.com'
        }
    })
    const email= {
        body:{
            name:'user',
            intro:'Here is your email',
            outro:'Thanks for using are service'
        }
    }
    const htmlContent = mailgenerator.generate(email)
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'user@gmail.com',
            pass:'user'
        }
    })
    let message = {
        from:'user@gmail.com',
        to:'to@gmail.com',
        subject:'Generated email',
        html:htmlContent
    }
    try{
        await transporter.sendMail(message)
        res.status(200).send('You should receive an email from us')
    }
    catch(err){
        console.log(err.toString())
    }
})


