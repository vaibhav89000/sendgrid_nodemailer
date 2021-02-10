const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const log = console.log;
const environment = require('./environment');


let transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: environment.API_Url
    }
}));


let mailOptions = {
    from: '',  // single sender verified email id
    to: '', // To whom you want to send address
    subject: 'Nodemailer - Test',
    text: 'mail through sendgrid works!!!!!!!!'
};


transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs',err);
    }
    return log('Email sent!!!');
});