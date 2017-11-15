express = require('express');
app = express();
const path = require('path');
var bodyParse = require('body-parser')

app.use(bodyParse.json())
app.set("views", __dirname + '/views')
app.use(express.static(path.join(__dirname, './notes-frontEnd/dist')))

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/router.js');
routes_setter(app);


app.listen(8000, function(){
    console.log("Express running on port 8000");
})