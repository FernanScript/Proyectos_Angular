import { Products, taxCalculator } from './06-function-destructuring';

const shoppingCart : Products[] = [
    {
        description : 'Samsung',
        price : 700
    },
    {
        description : 'iPad',
        price : 500
    }
];

const [ total, tax ] = taxCalculator({
    products : shoppingCart,
    tax : 0.15
});

console.log('Total ', total);
console.log('Total ', tax);