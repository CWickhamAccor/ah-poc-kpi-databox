const Databox = require('databox');
const winston = require('winston');
const config = require('../config');

// const client = new Databox({
//     push_token: config.token,
// });

function send(params, client) {
    if (!params.date){
        params.date = new Date().toISOString();
    }
    client.push(params, (response) => {
        winston.info(response);
    });
}

module.exports = {
    send
};