const array = [1, 2, 3, 42];
const str = 'Hello';
// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);
// const iter = str[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
//{ value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 42, done: false }
// { value: undefined, done: true }

// for (let item of array) {
//     console.log(item);
// }

// const country = {
//     values: ['ru', 'kz', 'ua', 'by'],
//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next: () => {
//                 const value = this.values[i];
//                 i++;
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//
//     }
// };
//
// for (let item of country) {
//     console.log(item);
//
// }
//ru
// kz
// ua
// by

// Generator

function* gen(num = 4) {
    for (let i = 0; i < num; i++) {
        try {
            yield i;
        } catch (e) {
            console.log('Error', e);
        }
        yield i;
    }
}

const iter = gen(3);
console.log(iter.next());
console.log(iter.throw('My error'));
console.log(iter.next());
console.log(iter.next());

for (let i of gen(4)) {
    console.log(i);

}