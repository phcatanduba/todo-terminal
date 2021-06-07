import readlineSync from 'readline-sync';
import check from './check.js';
import add from './add.js';
import remove from './remove.js';

const menu = ['add', 'list', 'remove'];

const index = readlineSync.keyInSelect(menu, `Type your command: `);

if (index === 0) {
    add();
} else if (index === 1) {
    check();
} else if (index === 2) {
    remove();
}
