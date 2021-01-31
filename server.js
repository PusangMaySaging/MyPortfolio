require('dotenv').config();
const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SEND_GRID_API_KEY);
const bodyParser = require('body-parser');



const corsSettings = {
    origin:"https://ryan-ali.herokuapp.com",
    preflightContinue: false,
    methods:"POST"
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsSettings))
app.use(express.static(path.join(__dirname,'client/build')))


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client/build','index.html'))
})

app.post('/email',(req,res)=>{
    console.log(req.body)
    if(req.body.senderEmail == "" && req.body.senderMail == ""  && req.body.senderMessage == "" ){
        res.status(400) // if empty request
    }
    const email = { //email object
        to: "ryanali.developer@gmail.com",
        from: "ryanali456@gmail.com",
        subject:`${req.body.senderName} would like to connect with you.`,
        text: `${req.body.senderName} had seen your portfolio`,
        html: `<Strong>${req.body.senderMessage}</Strong> <br/>
        Sender Name: ${req.body.senderName}<br/>
        Sender Email : ${req.body.senderEmail} `
    }
sendGridMail.send(email).then(resp =>{
    console.log(resp)
    res.status(201)
    res.send("OK");
   }).catch(err=>{
       console.log(err)
       res.status(500)
   })
    
})
app.listen(port,()=>{
    console.log("Server Up and Running at PORT: " + process.env.PORT);
})






