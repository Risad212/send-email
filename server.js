const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");




// middleware
app.use(cors())
app.use(bodyParser.json());




// return response in brower server is working or not
app.get('/', (req, res) => {
  res.send('again testing')
})


//-------------------------------------------------
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.bdemail24.com",
    port: 465,
    // secure: true,
    // service: 'gmail',
     auth: {
      user: 'info@bdemail24.com', // generated ethereal user
      pass: 'WN=;+n[[yf{z', // generated ethereal password
    //   user: 'mdresad704@gmail.com', // generated ethereal user
    //   pass: 'fgvwnyrnzddwgint', // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: 'mdresad704@gmail.com', // sender address
    to: "hafez.risad@gmail.com", // list of receivers
    subject: "Aliance ✔", // Subject line
    text: "Hello world?",
     html: `sending email successfully`,
     
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
//   if(res.status === 200){
//       return res.json();
//   }
//   else{
//       return 'error'
//   }
}
 main().catch(console.error);
})


//-------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})