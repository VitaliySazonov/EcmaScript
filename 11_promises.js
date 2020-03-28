// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success');
//         console.log('After delay');
//     }, 500);
// });

const delay = ms => new Promise((res, rej) => {
    setTimeout(() => res(`Done! ${ms}`), ms);
});

// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Finally'));


// async function asyncDelay() {
//     try {
//         const data = await delay(2000);
//         console.log(data);
//     } catch (e) {
//         console.log('Error', e);
//     }
// }
//Error Done! 2000
// asyncDelay();

Promise.all([ // Появление Всех промисов ориентируясь по самому последнему 2000с.
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data));


Promise.race([ //race появление самого быстрого промиса. 500
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data));