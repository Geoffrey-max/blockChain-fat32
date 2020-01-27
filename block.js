var sha256 = require('js-sha256');

class Block {
    constructor(id, hashBackBlock, fivePages, idCont, inf) {
        this.id = id;
        this.hashBackBlock = hashBackBlock;
        this.fivePages = fivePages;
        this.idCont = idCont;
        this.inf = inf;

        let blockJson = {
            id: this.id,
            hashBackBlock: this.hashBackBlock,
            fivePages: this.fivePages,
            idCont: this.idCont,
            inf: this.inf
        }

        this.hashthisBlock = sha256(JSON.stringify(blockJson));
    }
}