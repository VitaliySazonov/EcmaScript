const defaultB = 30;
const getDefault = c => c * 2;

function complete(a = 10, b = getDefault(a)) {
    return a + b;
}

console.log(complete());

