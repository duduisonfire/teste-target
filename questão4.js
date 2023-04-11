const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const total = sp + rj + mg + es + outros;

const spInPercent = (sp/total) * 100;
const rjInPercent = (rj/total) * 100;
const mgInPercent = (mg/total) * 100;
const esInPercent = (es/total) * 100;
const outrosInPercent = (outros/total) * 100;

console.log(`SP representa ${spInPercent.toFixed(2)}% do valor total.`);
console.log(`MG representa ${mgInPercent.toFixed(2)}% do valor total.`);
console.log(`RJ representa ${rjInPercent.toFixed(2)}% do valor total.`);
console.log(`ES representa ${esInPercent.toFixed(2)}% do valor total.`);
console.log(`OUTROS representa ${outrosInPercent.toFixed(2)}% do valor total.`);

