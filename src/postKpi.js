const winston = require('winston');
const { send } = require('./databoxController');

module.exports = (req, res, client) => {
    let data = req.body;
    winston.info('POST body parsing: %j', data);
    send(data, client);
    res.send(data);
};