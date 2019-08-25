var faker = require('faker');

var phone = require("./generators/phone")

for (var i = 0; i < 1000; i++) {
    console.log(phone.generate());
}