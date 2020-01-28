var {stringifyAndHashElement} =require('../Tool/utils');

class Block {
    constructor(id, hashBackBlock, fivePages, idCont, inf) {
        this.id = id; //Numéros du bloc courant
        this.hashBackBlock = hashBackBlock; //Sha256 du block précédent
        this.fivePages = fivePages; //5 page précéde de leur numéro
        this.idCont = idCont; // id contributeur donnée par le peer 0
        this.inf = inf; // INFO Supplementaire
        this.hashthisBlock = stringifyAndHashElement(blockJson); //hashage du block
    }
}