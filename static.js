var express = require("express"),
    app = express(),
    __dirname='/Users/sirpunchallot/repos/fireform/app';

app.configure(function() {
    //tell express to serve static files from the special
    //node variable __dirname which contains the current
    //folder
    app.use(express.static(__dirname));
});

app.listen(8080);