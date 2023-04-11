const fs = require('fs');

const file = fs.readFileSync('dados.json', {encoding: 'utf-8'});
const dados = JSON.parse(file);
const values = [];


let value = 0;
for (let index = 0; index < dados.length; index++) {
    value += dados[index].valor;
    
    if (dados[index].valor > 0) {
        values.push(dados[index].valor);
    }
}

let media = value/30;
let numberOfDaysSuperior = 0;

for (let i = 0; i < values.length; i++) {
    if (values[i] > media) {
         numberOfDaysSuperior++;
     }
}

const minValue = Math.min(...values);
const maxValue = Math.max(...values);

console.log(`O menor faturamento do mês foi ${minValue}`);
console.log(`O maior faturamento do mês foi ${maxValue}`);
console.log(`Tivemos ${numberOfDaysSuperior} dias que o faturamento foi maior que a média.`);
console.log(`A média do faturamento mensal foi ${media}`);
