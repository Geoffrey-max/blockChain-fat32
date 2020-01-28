const axios = require("axios");
class Node {
  constructor(port) {
    this.port = port;
    //this.connection = axios.post("localhost:5000/newPost",{ "port": 24525 });
  }
}

module.exports = Node;
