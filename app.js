let escribir = prompt("Escribe el nombre de la pelicula");
const simboloPositivo = escribir.split(" ");
for(let i=0; i<simboloPositivo.length; i++){
  simboloPositivo[i] = simboloPositivo[i].charAt(0).toUpperCase() + simboloPositivo[i].slice(1);}
const capitalLetters = simboloPositivo.join("+");
const capitalLetter2 = simboloPositivo.join("-");

let web1num = "Web 01 "
let web1c01 = "https://pelispanda.com/";
let web1c02= "buscar/?buscar="
function concatenar(web1num, web1c01, web1c02, capitalLetters) {
    console.log(web1num + web1c01 + web1c02 + capitalLetters);
}   concatenar(web1num, web1c01, web1c02, capitalLetters);

let web2num = "Web 02 "
let web2c01 = "https://allcalidad.si/";
let web2c02= "?s="
function concatenar(web2num, web2c01, web2c02, capitalLetters) {
    console.log(web2num + web2c01 + web2c02 + capitalLetters);
}   concatenar(web2num, web2c01, web2c02, capitalLetters);

let web3num = "Web 03 "
let web3c01 = "https://www1.ditorrent.com/";
let web3c02= "?s="
function concatenar(web3num, web3c01, web3c02, capitalLetters) {
    console.log(web3num + web3c01 + web3c02 + capitalLetters);
}   concatenar(web3num, web3c01, web3c02, capitalLetters);

let web4num = "Web 04 "
let web4c01 = "https://www1.torrentpelis.com/";
let web4c02= "?s="
function concatenar(web4num, web4c01, web4c02, capitalLetters) {
    console.log(web4num + web4c01 + web4c02 + capitalLetters);
}   concatenar(web4num, web4c01, web4c02, capitalLetters);

let web5num = "Web 05 "
let web5c01 = "https://torrentlatino.cc/";
let web5c02= "?s="
function concatenar(web5num, web5c01, web5c02, capitalLetters) {
    console.log(web5num + web5c01 + web5c02 + capitalLetters);
}   concatenar(web5num, web5c01, web5c02, capitalLetters);

let web6num = "Web 06 "
let web6c01 = "https://www.cinemaniahdd.net/";
let web6c02= "?s="
function concatenar(web6num, web6c01, web6c02, capitalLetters) {
    console.log(web6num + web6c01 + web6c02 + capitalLetters);
}   concatenar(web6num, web6c01, web6c02, capitalLetters);

let web7num = "Web 07 "
let web7c01 = "https://peliculasyseriesgdup-lomejor.blogspot.com/";
let web7c02= "search?q="
function concatenar(web7num, web7c01, web7c02, capitalLetters) {
    console.log(web7num + web7c01 + web7c02 + capitalLetters);
}   concatenar(web7num, web7c01, web7c02, capitalLetters);

let web8num = "Web 08 "
let web8c01 = "http://www.bajarpelisgratis.com/";
let web8c02= "videos/descargar-"
function concatenar(web8num, web8c01, web8c02, capitalLetter2) {
    console.log(web8num + web8c01 + web8c02 + capitalLetter2);
}   concatenar(web8num, web8c01, web8c02, capitalLetter2);