const express = require('express');
const app = express();
const cors = require('cors');
// CORS, just in case?

app.use(cors());
app.use(express.json());

app.use('/api/v1/gundams', require('./controller/gundams'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
