const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./middleware/connection');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

app.use(cors());
app.use(express.json());

app.use('/notes', connection, require('./routes/notes'));

app.use(notFound);
app.use(handler);

module.exports = app;
