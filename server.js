const argv = require("yargs").argv;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { getPages } = require("./Tool/utils");
const Node = require("./Peer/node");
const Block = require("./Peer/block");

let node = new Node(argv.port);

app.use(bodyParser.json());
app.post("/node/resolve", (req, res) => {
    let { start, end } = req.body;
    let blockChain = [];
    let id = 0;
    let hashLastBlock = null;
    let pageData = getPages(start, end);
    let nonce = 1;
    console.log("My Page " + pageData);
    blockChain.forEach(block_tst => {
        if (block_tst.id === (id - 1)) {
            hashLastBlock = block_tst.hashBackBlock;
        }
    });
    if (id === 0) {
        let block = new Block(id, null, pageData, node.id, null, nonce);
        if (block.hashthisBlock.substr(0) === 0) {
            blockChain.push(block);
            id++;
        } else {
            nonce++;
        }
    }
    res.send();
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
