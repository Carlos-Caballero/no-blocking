let { getUsusarioSync } = require('./app');

console.log('Inicia');

let usuario = getUsusarioSync(1);
console.log(usuario);

let usuario1 = getUsusarioSync(2);
console.log(usuario1);

let usuario2 = getUsusarioSync(3);
console.log(usuario2);

let usuario3 = getUsusarioSync(4);
console.log(usuario3);

let usuario4 = getUsusarioSync(5);
console.log(usuario4);

console.log('Fin');