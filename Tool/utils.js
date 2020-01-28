const http = require('http');

function getPages(start, end) {
  return http.get(
    "http://reader-challenge.herokuapp.com/reader/" + start + "/" + end,
    response => {
      var data;
      response.on("data", function(d) {
        data += d;
      });
      return data
    }
  );
  
}

function findPow(element) {

    return sha256(JSON.stringify(element))
}


module.exports = { getPages,findPow };
