const axios = require("axios");
class Node {
  constructor(port) {
    this.port = port;
    let _host = this
    axios
      .post("http://localhost:5000/newnode",{
        port: _host.port
      })
      .then(function(response) {
        _host.ports =  response.data.ports;
        _host.id =  response.data.id;
        _host.blockChain = response.data.blockChain
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

module.exports = Node;
