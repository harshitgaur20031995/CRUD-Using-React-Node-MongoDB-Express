const app = require('./app');

const http = require('http');

const server = http.createServer(app);


const port = process.env.PORT || 4800;


server.listen(port, () => { console.log('server listening ' + port) })

function findNumber(arr) {
    var n = arr.length;
    var total = ((n + 2) * (n + 1)) / 2;
    console.log(total);
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
      total -= arr[i];
    }
    return total;
  }
  
  
  var arr = [2,3,10,15,26,35,50,63];
 // var arr = [1,2,3,4,5,7]
  console.log(findNumber(arr));