const symbol = Symbol('demo');
const other = Symbol('other');

// console.log(symbols);
// console.log(other);
// console.log(symbols === other);
const obj = {
    name: 'Lena',
    demo: 'DEMO',
    [symbol]: 'meta',
};

for (let key in obj) {
    console.log(key);
}





