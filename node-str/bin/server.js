const http = require('http');
const debug = require('debug')('nodestr:server');

const app = require(`../src/app`);

const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on(`error`, onError);
server.on(`listening`, onListening);
console.log(`api rodando ` + port);



//codig tirado do express para validação
function normalizePort(val){
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }

    return false;
}

function onError(error){
    if(error.syscall !== `listen`){
        throw error;
    }

    const bind = typeof port === `string` ?
        `Pipe ` + port : `Port ` + port;

    switch(error.code){
        case `EACCES`:
            console.error(bind + ` require elevate privilage`);
            process.exit(1);
            break;
        case 'EADDRINUSE' :
            Console.error(bind + ` is alredy in use`)
            process.exit(1);
            break;
        default: 
            throw erros;     
    }    
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === `string` 
    ? `Pipe ` + addr 
    : `Port ` + addr.port;
    debug(`listening on ` + bind);
}