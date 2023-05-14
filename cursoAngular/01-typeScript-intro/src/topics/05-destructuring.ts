interface AudioPlayer {
    audioVolume : number;
    songDuration : number;
    song : string;
    details : Details;
}

interface Details {
    author : string;
    year : number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Air France",
    details: {
        author : 'Eladio',
        year : 2023
    }
}

// Destructuring of objects
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);


// Destructuring of arrays
const [ , , picoro ] : string[] = ['Goku','Vegeta','Picoro'];

console.log('Personaje 3: ', picoro);

export {};