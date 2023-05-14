function addNumbers(a:number,b:number){
    return a + b;
}

const addNumbersArrow = (a:number,b:number) => a * b;

const multiply = (firstNumber:number, secondNumber?:number, base:number = 2) => firstNumber * base;

// const resultado = (addNumbers(1,2));
// const resultado2 = (addNumbersArrow(2,2));
// const resultado3 = (multiply(10));

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

interface Character {
    name : string,
    hp : number,
    showHp : () => void;
}

const healCharacter = (character:Character, amount:number) => {
    character.hp += amount;
} 

const strider : Character = {
    name : 'Strider',
    hp : 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}

healCharacter(strider, 10);

strider.showHp();

export {};