const map = new Map(
    [['a', 1]]
);
// console.log(map.get('a'));
map.set('b', 2).set(NaN, 'Number').set(42, 'Demo');
// console.log(map);
// map.clear();
// console.log(map);
// console.log(map.has(42));
// map.delete('b');
// console.log(map.size);
// console.log(map);

// console.log('1', map.keys());
// console.log('2', map.entries());
// console.log('3', map.values());
//1 [Map Iterator] { 'a', 'b', NaN, 42 }
// 2 [Map Entries] {
//   [ 'a', 1 ],
//   [ 'b', 2 ],
//   [ NaN, 'Number' ],
//   [ 42, 'Demo' ]
// }
// 3 [Map Iterator] { 1, 2, 'Number', 'Demo' }

//Set

const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8]);
console.log(set.size);
console.log(set.add(21));
//set.clear()
set.delete(1);
console.log(set);

console.log('1', set.keys());
console.log('2', set.values());
console.log('3', set.entries());
//6
// Set { 1, 2, 3, 5, 8, 13, 21 }
// Set { 2, 3, 5, 8, 13, 21 }
// 1 [Set Iterator] { 2, 3, 5, 8, 13, 21 }
// 2 [Set Iterator] { 2, 3, 5, 8, 13, 21 }
// 3 [Set Entries] {
//   [ 2, 2 ],
//   [ 3, 3 ],
//   [ 5, 5 ],
//   [ 8, 8 ],
//   [ 13, 13 ],
//   [ 21, 21 ]
// }






