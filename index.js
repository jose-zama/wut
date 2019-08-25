var faker = require('faker');

const randomNumberWith = (length) => {    
    return faker.helpers.replaceSymbolWithNumber("#".repeat(length));
};

let templates = [
    ()=> { return `Auto & Transport, ${randomNumberWith(10)} UBER TRIP ${faker.random.alphaNumeric(faker.random.number(7))}`},
    ()=> { return `FOOD & DINING, ${randomNumberWith(10)}8284120518LOAC720417H51CAFE DAS CORTEZ I`},
    ()=> { return `Health & Fitness, ${randomNumberWith(10)}CAGC6509086L2CONSUL DR CESAREO`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}CCO 8605231N4OXXO ${faker.random.alphaNumeric(faker.random.number(12))}`},
    ()=> { return `Shopping, ${randomNumberWith(10)}CDE 8401046V6CALIMAX ${faker.random.alphaNumeric(faker.random.number(9))}`},
    ()=> { return `Health & Fitness, ${randomNumberWith(10)}CFC 110121742F AHORRO ${faker.random.alphaNumeric(faker.random.number(8))}`},
    ()=> { return `Entertainment, ${randomNumberWith(10)}CME 981208VE4CINEPOLIS ${faker.random.alphaNumeric(faker.random.number(7))}`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}DCA 0105286Q2LA EUROPEA  ${faker.lorem.words(1)}`},
    ()=> { return `FOOD & DINING, ${randomNumberWith(10)}EINI5408116L9REST DAS CORTEZ C`},
    ()=> { return `Health & Fitness, ${randomNumberWith(10)}FAR 970429SE2FARM TIJUANA RIO`},
    ()=> { return `Health & Fitness, ${randomNumberWith(10)}FMT 890126BZ4FARM ROMA ${faker.random.alphaNumeric(faker.random.number(7))}`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}GIC 131220PD9GRANO DE ORO SUC`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}HERC711103264BOLA LOCA TE`},
    ()=> { return `Health & Fitness, ${randomNumberWith(10)}IME 130212S67IZ CYNTHIA MAGDA`},
    ()=> { return `FOOD & DINING, ${randomNumberWith(10)}IME 130212S67IZ DAS CORTEZ LA`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}LGR 150220P98CAFE BARISTI ${faker.random.alphaNumeric(faker.random.number(4))}`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}MAP 170314HN4EL MUCHACHO ALEGR`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}MARP8505084H5LA FLOR DE OAXACA`},
    ()=> { return `Shopping, ${randomNumberWith(10)}NWM 9709244W4SUPERCENTER TIJUA`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}OCA 131120R10SUBWAY ${faker.random.alphaNumeric(faker.random.number(6))}`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}OPP  010927SA5DOMINOS RIO`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}SCM 850529GZ7SNTA CLARA TIJUAN`},
    ()=> { return `Food & Dining, ${randomNumberWith(10)}TRA 1701112G8REST TAJIMAMX`},
    ()=> { return `Bills & Utilities, ${randomNumberWith(2)} COMPRA T AIRE ${randomNumberWith(10)} EN BPI`},
    ()=> { return `Shopping, ${randomNumberWith(23)}AMZ Mechanica US`},
    ()=> { return `Food & Dining, ${randomNumberWith(23)}REST PUBLIC HOUSE`},
    ()=> { return `Auto & Transport, ${randomNumberWith(23)}UBER TRIP ${faker.random.alphaNumeric(faker.random.number(7))}`},
    ()=> { return `Fees & Charges, 70COMISION RETIRO INTERNACIONAL${randomNumberWith(8)}`},
    ()=> { return `Auto & Transport, PAYPAL UBER BV 35314369001 NL`},
    ()=> { return `Auto & Transport, PAYPAL UBER BV CIU`},
    ()=> { return `Auto & Transport, PAYPAL UBER BV MEX`},
    ()=> { return `Food & Dining, REST PUBLIC HOUSE 2 TIJ`}
]

for(var i = 0, size = templates.length; i < size; i++ ){
    for (var j = 0; j < 1000; j++) {
        console.log(templates[i]());
    }    
}