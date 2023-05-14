// const skills:string[] = ['Bash','Counter','Healing'];

interface Caracter {
    nombre : string;
    nivel : number;
    skills : string[];
    ciudad ?: string;
}

const personaje : Caracter = {
    nombre : 'Bowser',
    nivel : 75,
    skills : ['Fuego','Fuerza','Salto']
};

personaje.ciudad = 'Koopa Kingdom';

console.table(personaje);

export {};