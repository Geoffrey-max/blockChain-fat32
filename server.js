const argv = require("yargs").argv;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { getPages } = require("./Tool/utils");
const Node = require("./Peer/node");
const Block = require("./Peer/block");
const axios = require("axios");
const { getTimeInsert, getIdBlockChain, findPow } = require("./Tool/utils");

let node = new Node(argv.port);

app.use(bodyParser.json());
app.post("/node/resolve", (req, res) => {
  let { start, end } = req.body;
  let hashLastBlock = null;
  let pageData = getPages(start, end);
  let nonce = 1;
  let block = null;
  console.log("My Page " + pageData);
  if (getIdBlockChain(node.blockChain) === 0) {
    block = new Block(
      getIdBlockChain(node.blockChain),
      null,
      pageData,
      node.id,
      null,
      nonce
    );
    while (block.hashthisBlock === null) {
      let hashthisBlock = findPow(block);
      if (hashthisBlock.substring(0, 1) === "0") {
        block.hashthisBlock = hashthisBlock;
      } else {
        console.log("nonce");
        block.nonce++;
      }
    }
    node.blockChain.push(block);
  } else {
    node.blockChain.forEach(block_tst => {
      if (block_tst.id === getIdBlockChain(node.blockChain) - 1) {
        hashLastBlock = block_tst.hashthisBlock;
      }
    });
    block = new Block(
      getIdBlockChain(node.blockChain),
      hashLastBlock,
      pageData,
      node.id,
      null,
      nonce
    );
    while (block.hashthisBlock === null) {
      let hashthisBlock = findPow(block);
      if (hashthisBlock.substring(0, 1) === "0") {
        block.hashthisBlock = hashthisBlock;
      } else {
        console.log("nonce");
        block.nonce++;
      }
    }
    node.blockChain.push(block);
  }
  node.ports.forEach(port => {
    if (node.port != port) {
      axios.post("http://localhost:" + port + "/sync", { block: block });
    }
  });
  res.send(node.blockChain);
});

app.post("/sync", (req, res) => {
  let { block } = req.body;
  node.blockChain.push(block);
  res.status(200).send(node.blockchain);
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
