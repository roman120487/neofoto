const express = require('express');
const router = express.Router();
const cors = require('cors')
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'andriy.nuvchuk@gmail.com',
        pass: '12fylhsq51'
    }
  });

router.use(cors())

router.post('/', cors(), function (req, res) {
    transporter.sendMail({
        from: 'andriy.nuvchuk@gmail.com',
        to: req.body.namePersonEmail,
        subject: 'Message neophoto',
        text: req.body.namePersonMessage
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    });
})

module.exports = router;