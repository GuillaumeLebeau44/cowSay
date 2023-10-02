const info = require("./information");

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `${info.prenom} ${info.campus}`,
}))