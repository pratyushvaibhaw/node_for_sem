// Q.8
const Mailgen = require('nodemailer')
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.post('/sendMail',async(req,res)=>{
    const mailgenerator = new Mailgen({
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
    let message = {
        from:'user@gmail.com',
        to:'to@gmail.com',
        subject:'Generated email',
        html:htmlContent
    }
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'user@gmail.com',
            pass:'user'
        }
    })
    try{
        await transporter.sendMail(message)
        res.status(200).send('You should receive an email from us')
    }
    catch(err){
        console.log(err.toString())
    }
})
//8.c
// Multer package in node.js is used for handling multipart form data while uploading files. 
// Some features of multer module are -- limiting file ResizeObserverSize, checking the file extension, option for single , multiple array of file uploads, custom file name and file path
const multer = require('multer')
const storage = multer.diskStorage({
    diskStorage: function(req,res,cb){

        cb(null,'/uploads')
    },
    filename:function(req,res,cb){
        let ext = path.extname(file.origninalname)
        let filename = 'upimg-'+Date.now()+ext
        cb(null,filename)
    }
})
const upload = multer.upload({
    storage:storage
})

//9.a
const fs = require('fs')
const Mailgen = require('mailgen')
const mailgenerator = Mailgen({
    theme:"default",
    product:{
        name:'Discount Store',
        link:'https://discount.store'
    }

})
const email ={
    body:{
        name:nameFromCookier,
        intro:"Welcome to our site. We are offering discount for following item",
        table:{
            data:[
                {
                    name:'Lenovo',
                    price:'4500',
                    discount:'25%'
                }
            ]
        },

        action:{
            intruction:'Please reply to get discount',
            button:{
                link:'https://mailgen/reply'
            }
        },

        outro:'Need help ... contact us'
    }
}
const html = mailgenerator.generate(email)
fs.writeSync('email.html',html)



