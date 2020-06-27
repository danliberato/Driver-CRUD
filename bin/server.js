const app = require('../src/app');

const port = normalizePort(process.env.PORT || '3000');

function normalizePort(value){
    const port = parseInt(value, 10);
    if (isNaN(port)){
        return value
    }
    if(port >= 0){
        return port;
    }
    return false;
}

app.listen(port, function(){
    console.log('App listening on port ${port}');
})