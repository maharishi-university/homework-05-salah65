import { startMeditation } from "./Exercise-01";
import { isPrime } from "./Exercise-02";
import { fetchRecipes } from "./Exercise-03";


//Exercise-01
startMeditation();

//Exercise-02
console.log('start');
isPrime(7)
    .then(console.log)
    .catch(console.error);
console.log('end');

//async-await syntax
(async (number) => {
    console.log('start');
    const result = await isPrime(number);
    console.log(result);
})();



//Exercise-03
fetchRecipes();