const express = require('express'),
    path = require('path'),
    http = require('http'),
    bodyParser = require('body-parser'),
    chords = require('./routes/chords'),
    port = process.env.PORT || '3000',
    app = express();

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/chords', chords);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Chords API running on localhost:${port}`));