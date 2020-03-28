const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Field ${prop} in NO object`
    },

    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value);
        } else {
            console.log('Length must be more than 2 symbols ' + value.length);
        }
    }
};

const form = {
    login: 'tester',
    password: '12345'
};

const formProxy = new Proxy(form, validator);
// console.log(formProxy.login);
// console.log(formProxy.password);
// console.log(formProxy['username']);

// formProxy.password = '12'; // Не прошла валидация
// console.log(formProxy.password); // 12345

function log(message) {
    console.log('[Log]: ', message);
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('Args number is not relevant! );');

        }
    }
});

proxy('Custom message'); // [Log]:  Custom message
proxy('', 321); // Args number is not relevant! );
