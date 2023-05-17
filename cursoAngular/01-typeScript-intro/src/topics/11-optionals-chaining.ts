export interface Passenger {
    name : string;
    children ?: string[];
}

const passenger1 : Passenger = {
    name : 'Fernando'
}
const passenger2 : Passenger = {
    name : 'Monica',
    children : ['Karoline','Esteban']
}

const returnChildrenNumber = (passenger : Passenger) : number => {
     // Optionals Chaining
    const howManyChildren = passenger.children?.length || 0; // si no tiene la propiedad children escribe 0
    // const howManyChildren = passenger.children!.length; // '!' confia en mi no recibiras un nulo

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1);