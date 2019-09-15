const faker = require('faker');
const moment = require('moment');

const randomNumberWith = (length) => {
    return faker.helpers.replaceSymbolWithNumber("#".repeat(length));
};

const randomAlphaNumeric = (min, max) => {
    return faker.random.alphaNumeric(min) + faker.random.alphaNumeric(faker.random.number(max - min));
}

const randomDateFromPastYears = (years) => {
    return moment(faker.date.past(years)).format('YYYYMMDD'); ;
}

const randomCapitalLetters = (length) => {
    let random_string = '';
    let ascii_low = 65,
        ascii_high = 90 ;
    for(let i = 0; i < string_length; i++) {
        let random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

let templates = {
    "Food & Dining": [
        ()=> { return `${randomNumberWith(10)}8284120518LOAC720417H51CAFE DAS CORTEZ I`; },
        ()=> { return `${randomNumberWith(10)}CCO 8605231N4OXXO ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}DCA 0105286Q2LA EUROPEA  ${faker.lorem.words(1)}`; },
        ()=> { return `${randomNumberWith(10)}EINI5408116L9REST DAS CORTEZ C`; },
        ()=> { return `${randomNumberWith(10)}GIC 131220PD9GRANO DE ORO SUC`; },
        ()=> { return `${randomNumberWith(10)}HERC711103264BOLA LOCA TE`; },
        ()=> { return `${randomNumberWith(10)}IME 130212S67IZ DAS CORTEZ LA`; },
        ()=> { return `${randomNumberWith(10)}LGR 150220P98CAFE BARISTI ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}MAP 170314HN4EL MUCHACHO ALEGR`; },
        ()=> { return `${randomNumberWith(10)}MARP8505084H5LA FLOR DE OAXACA`; },
        ()=> { return `${randomNumberWith(10)}OCA 131120R10SUBWAY ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}OPP  010927SA5DOMINOS ${randomAlphaNumeric(4, 8)}`; },
        ()=> { return `${randomNumberWith(10)}SCM 850529GZ7SNTA CLARA ${randomAlphaNumeric(6, 8)}`; },
        ()=> { return `${randomNumberWith(10)}TRA 1701112G8REST TAJIMAMX`; },
        ()=> { return `${randomNumberWith(23)}REST PUBLIC HOUSE`; },
        ()=> { return `REST PUBLIC HOUSE 2 TIJ`; },
        ()=> { return `${randomNumberWith(10)}CAGX9812308L8REST SUSHUMI`; },
        ()=> { return `${randomNumberWith(10)}RACN510417K74CAFE AQUAMARINO`; },
        ()=> { return `${randomNumberWith(10)}AHG 130507626REST C REAL ${randomAlphaNumeric(5, 7)}`; },
        ()=> { return `${randomNumberWith(10)}ECU 100420883REST HORNERO`; },
        ()=> { return `${randomNumberWith(10)}ICR 9305317G4CARLS JR ${randomAlphaNumeric(6, 8)}`; },
        ()=> { return `${randomNumberWith(10)}OEA 040112AL8PETER PIPER ${randomAlphaNumeric(6, 8)}`; },
        ()=> { return `${randomNumberWith(10)}GOJL7204017V3REST MANDARIN EXP`; },
        ()=> { return `${randomNumberWith(10)}VPC 160113L21DANTES GASTROMED`;},
        ()=> { return `${randomNumberWith(10)}GIC 131220PD9GRANO DE ORO SUC`; }
    ],
    "Health & Fitness": [
        ()=> { return `${randomNumberWith(10)}CAGC6509086L2CONSUL DR CESAREO`},
        ()=> { return `${randomNumberWith(10)}CFC 110121742F AHORRO ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}FAR 970429SE2FARM TIJUANA ${randomAlphaNumeric(6, 8)}`; },
        ()=> { return `${randomNumberWith(10)}FMT 890126BZ4FARM ROMA ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}IME 130212S67IZ CYNTHIA MAGDA`; },
        ()=> { return `${randomNumberWith(10)}SACL860824G91MEDICAL PET`; },
        ()=> { return `${randomNumberWith(10)} GYMPASS ${randomNumberWith(7)}NL`}
    ],
    "Shopping": [
        ()=> { return `${randomNumberWith(10)}CDE 8401046V6CALIMAX ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}NWM 9709244W4SUPERCENTER ${randomAlphaNumeric(6, 10)}`; },
        ()=> { return `${randomNumberWith(23)}AMZ Mechanica US`; },
        ()=> { return `${randomNumberWith(10)}TSO 991022PB6SORIANA${randomNumberWith(3)} ${randomAlphaNumeric(6, 8)}`; },
        ()=> { return `${randomNumberWith(10)}FAR 970429SE2YZA URBAN CENTER`; },
        ()=> { return `${randomNumberWith(10)}CME 910715UB9COSTCO ${randomAlphaNumeric(6, 10)}`; },
        ()=> { return `${randomNumberWith(10)}NWM 9709244W4SAMS ${randomAlphaNumeric(6, 10)}`},
        ()=> { return `${randomNumberWith(10)}ANE 140618P37AMAZON MX`},
        ()=> { return `${randomNumberWith(10)} PIO PICO TT US`}
    ],
    "Entertainment": [
        ()=> { return `${randomNumberWith(10)}CME 981208VE4CINEPOLIS ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `${randomNumberWith(10)}CME 981208VE4CINEPOLIS DULCERI`; }
    ],
    "Bills & Utilities": [
        ()=> { return `${randomNumberWith(2)} COMPRA T AIRE ${randomNumberWith(10)} EN BPI`; }
    ],
    "Fees & Charges": [
        ()=> { return `70COMISION RETIRO INTERNACIONAL${randomNumberWith(8)}`; }
    ],
    "Auto & Transport": [
        ()=> { return `${randomNumberWith(10)} UBER TRIP ${randomAlphaNumeric( 5, 10)}`; },
        ()=> { return `${randomNumberWith(23)}UBER TRIP ${randomAlphaNumeric(5, 10)}`; },
        ()=> { return `PAYPAL UBER BV 35314369001 NL`; },
        ()=> { return `PAYPAL UBER BV CIU`; },
        ()=> { return `PAYPAL UBER BV MEX`; }
    ],
    "Transfer": [
        ()=> { return `ABONO BPI DE CUENTA ${randomNumberWith(4)}`; },
        ()=> { return `NETNM ${faker.random.alphaNumeric(5)}`; },
        ()=> { return `CARGO BPI TRANSFERENCIA A ${randomNumberWith(4)}`; },
        ()=> { return `CGO ${randomAlphaNumeric(10, 20)}`; },
        ()=> { return `AHORRO ${randomNumberWith(7)}`; }
    ],
    "Travel": [
        ()=> { return `VOLARIS ECOM ${faker.finance.currencyCode()} MEX`; },
        ()=> { return `${randomNumberWith(10)}HVG 090818GD2HOTEL DEL VALLE G`; },
        ()=> { return `8043007102 AIR FRANCE 057FR`; },
        ()=> { return `8043007103 WOW AIRUS W 012US`; },
        ()=> { return `${randomNumberWith(10)}ILA 101109LT1IBERIA WEB`; }
    ],
    "Gifts & Donations": [
        ()=> { return `DONACIONDISP 4910897038257754 ${randomDateFromPastYears(2)}`; },
        ()=> { return `${randomNumberWith(10)}OPM 150323DI1PAYPAL CASTROLIMO`; }
    ],
    "Withdral": [
        () => { return `RETIRO CAJERO 4213166085280349 ${randomDateFromPastYears(2)}`; }
    ]
}


let csvdata = [];
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'training-data.csv',
    header: [
        { id: "catKey", title: "catKey" },
        { id: "category", title: "category" }
    ]
});

const categories = Object.keys(templates)

for (let key in categories) {
    let catKey = categories[key];
    let category = templates[categories[key]];

    for (let i = 0; i < 1000; i++) {
        csvdata.push({
            catKey: catKey,
            category: category[faker.random.number(category.length - 1)]()
        });
        // console.log(catKey + ",", category[faker.random.number(category.length - 1)]())
    }
}

csvWriter
    .writeRecords(csvdata)
    .then(() => console.log('The CSV file was written successfully'));