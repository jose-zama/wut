var faker = require('faker');

const randomNumberWith = (length) => {    
    return faker.helpers.replaceSymbolWithNumber("#".repeat(length));
};

const phone = () => {
    return `${randomNumberWith(2)} COMPRA T AIRE ${randomNumberWith(10)} EN BPI, Bills & Utilities`;
}

const volaris = () => {
    return `VOLARIS ECOM ${faker.finance.currencyCode()} MEX, Travel`;
}

const 

for (var i = 0; i < 1000; i++) {
    console.log(phone());
    console.log(volaris());
}