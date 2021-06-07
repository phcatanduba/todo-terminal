import fs from 'fs';
import readlineSync from 'readline-sync';

export default function add() {
    const input = readlineSync.question('What do you want to do? ');
    fs.writeFileSync(
        './data.txt',
        `${fs.readFileSync('./data.txt', 'utf8')}\uD83D\uDD34 ${input};`
    );
}
