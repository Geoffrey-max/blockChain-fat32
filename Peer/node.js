const axios = require("axios");
class Node {
  constructor(port) {
    this.port = port;
    this.blockchain = [];
    let _host = this
    axios
      .post("http://localhost:5000/newnode",{
        port: _host.port
      })
      .then(function(response) {
        _host.connexion =  response.data.ports;
        _host.id =  response.data.id;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

module.exports = Node;
