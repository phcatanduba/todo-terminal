import fs from 'fs';
import readlineSync from 'readline-sync';

export default function check() {
    const options = fs.readFileSync('./data.txt', 'utf8').split(';');
    const index = readlineSync.keyInSelect(
        options,
        'What todo do you want to check/uncheck?'
    );
    let newOptions = options;
    if (newOptions[index].includes(`\uD83D\uDD34`)) {
        newOptions[index] = `🟢${newOptions[index].slice(
            2,
            newOptions[index].length
        )}`;
    } else {
        newOptions[index] = `🔴${newOptions[index].slice(
            2,
            newOptions[index].length
        )}`;
    }
    fs.writeFileSync('./data.txt', `${newOptions.join(';')}`);
}
