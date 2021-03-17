//웹 서버를 돌려주는 코드
let express = require('express');
let app = express();

let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

//listen : 웹서버가 클라이언트가 접속이 되기까지를 기다리고 있다. 
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
