const argv = require("yargs").argv;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { getPages } = require("./Tool/utils");
const Node = require("./Peer/node");

let node = new Node(argv.port);

app.use(bodyParser.json());
app.post("/node/resolve", (req, res) => {
  let { start, end } = req.body;
  timeout = 10; //30000* Math.random();
  setTimeout(() => {
    let pageData = getPages(start, end);
    console.log("My Page " + pageData);
    res.send();
  }, timeout);
});



setTimeout(() => {
  console.log(node);
  if (argv.port && argv.port != 5000) {
    if (node) {
      // Start server
      app.listen(argv.port, () => {
        console.log(`Server listening`, argv.port);
      });
    } else {
      console.log("Error : Node not create");
    }
  } else {
    console.log("node 'main.js' --port=XXXX");
  }
}, 7000);
