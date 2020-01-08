/* 

A = P(1 + r/m)power(mt)
A - Future value
P - Principal
r - annual rate
m - Compound year
t - time period for the compound interest

*/

const principal = 20000;
const annualRate = 0.1;
const timePeriod = 20;
const eachYearCompound = 12;

const futureIncome = principal * Math.pow((1 + (annualRate / eachYearCompound)), eachYearCompound * timePeriod);

console.log("The Future Income is " + futureIncome);