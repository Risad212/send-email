# nodeApiCpanel 
#SMTP configuration

node.js project with nodemailer for send email with smtp configuration deploy in cpanel



#Example

const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

// middleware
app.use(cors())
app.use(bodyParser.json())

//-------------------------------------------------
app.post('/send', (req, res) => {
  const { name, email, message } = req.body; get data from front end
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'host', // take it from cpnael 
      port:  , // take it from cpnael
      auth: {
        user: 'info@gmail.com', // generated email from cpanel
        pass: 'this email password', // generated password from cpanel
      },
    });

    const mailOptions = {
      from: sender email,
      to: "reciver email",
      subject: "subject",
      html: `
             <h3>Name: ${name}</h3>
             <h3>Email: ${email}</h3>
             <h3>Message: ${message}</h3>
           `,
    };

    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
      }
      else {
        // this code for reply if you don't wanna use it than remove it
        const threadOptions = {
          from: "hafez.risad@gmail.com",
          to:   email,
          subject: "Alince Reply Message",
          html: `Thansk for Response We Will Contact as soon as possible`,
        };
        transporter.sendMail(threadOptions);
      }
    });
  }
  main().catch(console.error);
  return res.json()
})

//-------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

