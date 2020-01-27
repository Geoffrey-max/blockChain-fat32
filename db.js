const http = require('http');

let db = {
    lastInsertTimeStamp: 0,
    nbConnection: 0,
    connections: []
}

let blockChain = [];
let i = 0;
let j = 5;


http.get('http://reader-challenge.herokuapp.com/reader/' + i + '/' + j, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        console.log(chunk);
    });
});