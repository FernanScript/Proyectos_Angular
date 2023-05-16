export function WhatsMyTtype<T>( argument : T ) {
    return argument;
}

const amIString = WhatsMyTtype<string>('Hola Fernando');
const amINumber = WhatsMyTtype<number>(100);
const amIArray = WhatsMyTtype<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));