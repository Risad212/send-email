const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

// middleware
app.use(cors())
app.use(bodyParser.json())


// return response in brower server is working or not
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//-------------------------------------------------
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@bdemail24.com', // generated ethereal user
        pass: 'fgvwnyrnzddwgint', // generated ethereal password
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: email, // sender address
      to: "hafez.risad@gmail.com", // list of receivers
      html: `
             <h3>name: ${name}</h3>        
             <h3>message: ${message}</h3>
             `, // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return res.json()
  }
  main().catch(console.error);
})

//-------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})