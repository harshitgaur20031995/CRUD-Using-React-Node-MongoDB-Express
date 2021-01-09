const app = require('./app');

const http = require('http');

const server = http.createServer(app);


const port = process.env.PORT || 4800;


server.listen(port, () => { console.log('server listening ' + port) })
