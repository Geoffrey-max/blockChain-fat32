var { findPow } = require('../Tool/utils');

class Block {
    constructor(id, hashBackBlock, fivePages, idCont, inf, nonce) {
        this.id = id; //Numéros du bloc courant
        this.hashBackBlock = hashBackBlock; //Sha256 du block précédent
        this.fivePages = fivePages; //5 page précéde de leur numéro
        this.idCont = idCont; // id contributeur donnée par le peer 0
        this.inf = inf; // INFO Supplementaire
        this.nonce = nonce;

        let blockJson = {
            id: this.id,
            hashBackBlock: this.hashBackBlock,
            fivePages: this.fivePages,
            idCont: this.idCont,
            inf: this.inf,
            nonce: this.nonce
        }

        this.hashthisBlock = null; //hashage du block
    }
}

module.exports = Block;