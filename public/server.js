const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

app.get('/', function(req, res, next) {
    res.send("Hello world");
});