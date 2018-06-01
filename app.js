const winston = require('winston');
const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const Databox = require('databox');

const client = new Databox({
    push_token: config.token,
});

const app = express();

app.set('x-powered-by', false);
app.set('trust proxy', true);
app.use(bodyParser.json({limit: '50mb'}));
// Generating KPI Post
app.post('/kpi/post', (req, res) => {
    require('./src/postKpi')(req, res, client);
});
app.listen(config.port, () => {
    winston.info(`Starting ${config.server} (env: ${config.env}) and listening on port ${config.port}`);
});

module.exports = app;
