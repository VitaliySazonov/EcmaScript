// function sum(a, b) {
//     return a + b;
// }
//
// function cume(a) {
//     return a ** 3;
// }

// Лянда функции

const sum = (a, b) => a + b;

const cube = (a) => a ** 3;

// console.log(sum(2, 4));
// console.log(cube(3));

// setTimeout(() => console.log('After 1 sec'), 1000);

// Context

function log() {
    console.log(this);
}

let arrowLog = () => console.log(this);

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function() {
        // const self = this;
        setTimeout( () => {
            console.log(this.name + ' ' + this.age);
        }, 500);
    }
};

// person.log();
// person.arrowLog();
// console.log(global);
person.delayLog();