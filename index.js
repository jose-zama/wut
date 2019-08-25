var faker = require('faker');

const randomNumberWith = (length) => {    
    return faker.helpers.replaceSymbolWithNumber("#".repeat(length));
};

let templates = {
    "Auto & Transport": [
        ()=> { return `${randomNumberWith(10)} UBER TRIP ${faker.random.alphaNumeric(faker.random.number(7))}`},
    ],
    "Food & Dining": [
        ()=> { return `${randomNumberWith(10)}8284120518LOAC720417H51CAFE DAS CORTEZ I`},
        ()=> { return `${randomNumberWith(10)}CCO 8605231N4OXXO ${faker.random.alphaNumeric(faker.random.number(12))}`},
        ()=> { return `${randomNumberWith(10)}DCA 0105286Q2LA EUROPEA  ${faker.lorem.words(1)}`},
        ()=> { return `${randomNumberWith(10)}EINI5408116L9REST DAS CORTEZ C`},
        ()=> { return `${randomNumberWith(10)}GIC 131220PD9GRANO DE ORO SUC`},
        ()=> { return `${randomNumberWith(10)}HERC711103264BOLA LOCA TE`},
        ()=> { return `${randomNumberWith(10)}IME 130212S67IZ DAS CORTEZ LA`},
        ()=> { return `${randomNumberWith(10)}LGR 150220P98CAFE BARISTI ${faker.random.alphaNumeric(faker.random.number(4))}`},
        ()=> { return `${randomNumberWith(10)}MAP 170314HN4EL MUCHACHO ALEGR`},
        ()=> { return `${randomNumberWith(10)}MARP8505084H5LA FLOR DE OAXACA`},
        ()=> { return `${randomNumberWith(10)}OCA 131120R10SUBWAY ${faker.random.alphaNumeric(faker.random.number(6))}`},
        ()=> { return `${randomNumberWith(10)}OPP  010927SA5DOMINOS RIO`},
        ()=> { return `${randomNumberWith(10)}SCM 850529GZ7SNTA CLARA TIJUAN`},
        ()=> { return `${randomNumberWith(10)}TRA 1701112G8REST TAJIMAMX`},
        ()=> { return `${randomNumberWith(23)}REST PUBLIC HOUSE`},
        ()=> { return `REST PUBLIC HOUSE 2 TIJ`}
    ],
    "Health & Fitness": [
        ()=> { return `${randomNumberWith(10)}CAGC6509086L2CONSUL DR CESAREO`},
        ()=> { return `${randomNumberWith(10)}CFC 110121742F AHORRO ${faker.random.alphaNumeric(faker.random.number(8))}`},
        ()=> { return `${randomNumberWith(10)}FAR 970429SE2FARM TIJUANA RIO`},
        ()=> { return `${randomNumberWith(10)}FMT 890126BZ4FARM ROMA ${faker.random.alphaNumeric(faker.random.number(7))}`},
        ()=> { return `${randomNumberWith(10)}IME 130212S67IZ CYNTHIA MAGDA`},
    ],
    "Shopping": [
        ()=> { return `${randomNumberWith(10)}CDE 8401046V6CALIMAX ${faker.random.alphaNumeric(faker.random.number(9))}`},
        ()=> { return `${randomNumberWith(10)}NWM 9709244W4SUPERCENTER TIJUA`},
        ()=> { return `${randomNumberWith(23)}AMZ Mechanica US`},
    ],
    "Entertainment": [
        ()=> { return `${randomNumberWith(10)}CME 981208VE4CINEPOLIS ${faker.random.alphaNumeric(faker.random.number(7))}`},
    ],
    "Bills & Utilities": [
        ()=> { return `${randomNumberWith(2)} COMPRA T AIRE ${randomNumberWith(10)} EN BPI`},
    ],
    "Fees & Charges": [
        ()=> { return `70COMISION RETIRO INTERNACIONAL${randomNumberWith(8)}`},
    ],
    "Auto & Transport": [
        ()=> { return `${randomNumberWith(23)}UBER TRIP ${faker.random.alphaNumeric(faker.random.number(7))}`},
        ()=> { return `PAYPAL UBER BV 35314369001 NL`},
        ()=> { return `PAYPAL UBER BV CIU`},
        ()=> { return `PAYPAL UBER BV MEX`}
    ]
}

const categories = Object.keys(templates)

for(let key in categories){
    let catKey = categories[key];
    let category = templates[categories[key]];

    for(let i = 0; i < 1000; i++){
        console.log(catKey + ",", category[faker.random.number(category.length - 1)]())
    }
}