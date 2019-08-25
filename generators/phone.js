var faker = require('faker');

var generate = function(){
    return faker.helpers.replaceSymbolWithNumber("## COMPRA T AIRE ########## EN BPI");
}


module.exports = {
    generate: generate
}