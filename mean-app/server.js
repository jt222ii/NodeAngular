//Dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//API Routes

const app = express();
const api = require('./server/routes/api');

//parsers for POST

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Static path
app.use(express.static(path.join(__dirname, 'dist')));

// Set api routes
app.use('/api', api);

//return index file if route is not api
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//store port environment in express
const port = process.env.PORT || '3000';
app.set('port', port);

//http server create
const server = http.createServer(app);

//listen on port provided above
server.listen(port, () => console.log(`API running on localhost:${port}`));