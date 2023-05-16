// Interfaces
export interface Products {
    description : string;
    price : number;
}
interface TaxCalculationOptions {
    tax : number;
    products : Products[];
}

// Objects
const phone : Products = {
    description : 'Iphone 14',
    price : 1300
}
const tablet : Products = {
    description : 'Ipad Air',
    price : 800
}

// function
// function taxCalculator( options:TaxCalculationOptions ) : [number, number] {
// function taxCalculator( {tax, products}:TaxCalculationOptions ) : [number, number] {
export function taxCalculator( options :TaxCalculationOptions ) : [number, number] {
    const {tax, products} = options;
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    } );

    return [total, total * tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxNumber] = taxCalculator({
    products : shoppingCart,
    tax
});

// exit
console.log(`Total ${total}`);
console.log(`Tax ${taxNumber}`);