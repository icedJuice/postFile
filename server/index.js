var express = require('express');
var routers = express.Router();
var formatData = require('../utils/formatData');
var writeFlie = require('../utils/writeFile');
var answerHHML = require('../utils/answerHTML');
var bodyParser = require('body-parser');
var app = new express();
app.use(bodyParser.json());


var cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    alloweHeaders: ['Content-Type', 'Authorization']
}))


routers.post('/question', function (req, res) {

    if (!req.body) {
        res.send(
            formatData(301, 'Data Error.')
        )
    }
    writeFlie(req.body).then(() => {
        res.send(
            formatData(200, 'ok.')
        )
    }).catch(() => {
        res.send(
            formatData(500, 'Server Error.')
        )
    })
})

routers.get('/answer', function (req, res) {
    res.send(
        answerHHML()
    )
})

app.use('/wjs', routers);

function startServer(port) {
    var _PORT = port || 12300;
    app.listen(_PORT);
    console.log('server started at PORT: ' + _PORT);
}

module.exports = startServer;