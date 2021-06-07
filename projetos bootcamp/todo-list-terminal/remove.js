import fs from 'fs';
import readlineSync from 'readline-sync';

export default function remove() {
    const options = fs.readFileSync('./data.txt', 'utf8').split(';');
    const index = readlineSync.keyInSelect(
        options,
        'What todo do you want to remove?'
    );
    let newOptions = options;
    newOptions.splice(index);
    fs.writeFileSync('./data.txt', `${newOptions.join(';')};`);
    console.log(fs.readFileSync('./data.txt', 'utf8').split(';'));
}
