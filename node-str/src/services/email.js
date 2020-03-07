var config = require('../../cnfig');
var sendgrid = require('sendgrid')(config.sendgridKey); //retorna a function que recebe a porrinha como parametro

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: '',
        subject: subject,
        html: body
    })
}