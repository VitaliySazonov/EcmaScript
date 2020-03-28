const cityField = 'city';

const job = 'Frontend';

const person = {
    age: 26,
    name: 'Irina',
    job,
    [cityField + Date.now()]: 'Saint-Petersburg',
    'country-live': 'Russia',
    print: () => 'Person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ');
    }
};

// console.log(person.toString());
// console.log(person.print());
// console.log(person);

// Methods

const first = {a: 1};
const second = {b: 2};

// console.log(Object.is(20, 20)); // true
const obj = Object.assign({}, first, {
    c: 2,
    d: 3
}); // { a: 1, b: 2 }
// console.log(obj);

console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
console.log(Object.keys(obj)); // [ 'a', 'c', 'd' ]
console.log(Object.values(obj)); // [ 1, 2, 3 ]









