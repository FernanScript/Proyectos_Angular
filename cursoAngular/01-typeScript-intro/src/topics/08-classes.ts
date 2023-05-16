export class Person {
    // public name : string;
    // private address : string;

    constructor ( 
        public firstName:string = 'Fernando', 
        public lastName:string = 'Fernando', 
        private address:string = 'Villa las Acacias'
    ) {}
}

// export class Hero extends Person{
    
//     constructor (
//         public alterEgo : string,
//         public age : number,
//         public realName : string
//     ) {
//         super( realName, 'Acacias' )
//     }
// }
export class Hero {

    // public person : Person;

    constructor (
        public alterEgo : string,
        public age : number,
        public realName : string,
        public person : Person
    ) {
        // this.person = new Person(realName)
    }
}

const tony = new Person('Tony','Stark','New York');

const ironman = new Hero('Ironman',25,'Tony', tony);

console.log(ironman);