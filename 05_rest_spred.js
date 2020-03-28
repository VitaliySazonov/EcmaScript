// Rest

function average(a, ...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}

// console.log(average(10, 20, 30, 40, 50));

// Spread

// console.log(...array); // развернуть массив
// console.log(Math.max(...array)); // вычитывается в развёрнутом массиве
// console.log(Math.min(...array)); // min of array
// console.log(Math.max.apply(null, array)); // spread заменил это

// const fib = [1, ...array];
// console.log(fib); // [
//    1,  1,
//    2,  3,
//    5,  8,
//   13
// ]

// Destructuring

const array = [1, 2, 3, 5, 8, 13];

// const a = array[0];
// const b = array[1];
// const [a, b = 42, ...c] = array;
// console.log(a, b, c);

// const [a, , c] = array; // 1 3
// console.log(a, c);

// Object

const address = {
    country: 'Russia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function () {
        return `${this.country}, ${this.city}, ${this.street}`;
    }
};
const {city, ...rest} = address;
console.log(city);
console.log(rest);
//Moskow
// { country: 'Russia', street: 'Lenina', concat: [Function: concat] }


const newAddress = {...address, street: 'Tverskaya', code: 123};
console.log(newAddress);
//{
//   country: 'Russia',
//   city: 'Moskow',
//   street: 'Tverskaya',
//   concat: [Function: concat],
//   code: 123
// }





// const {city, country, street = 'Tverskaya', concat: addressConcat} = address;

// console.log(addressConcat.call(address));
// console.log(street);


// console.log(address.concat());


