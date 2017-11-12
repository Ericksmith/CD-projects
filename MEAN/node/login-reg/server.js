express = require('express');
app = express();
var bodyParser = require('body-parser');


//middleware
app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

//database
require("./server/config/mongoose.js");

var routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(8000, function(){
    console.log('Server running on port 8000');
})