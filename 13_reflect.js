class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

class ProtoStudent {
    university = 'Oxford'
}

const student = Reflect.construct(Student, ['Igor']);                   // Student { name: 'Igor' }
console.log(student);
// console.log(student.__proto__ === ProtoStudent.prototype);                       // true
Reflect.apply(student.greet, {name: 'Tester'}, []);          // Hi! My name is Tester
console.log('ownKeys', Reflect.ownKeys(student));                                   // ['name']
Reflect.preventExtensions(student);                                                 // запрещает изменять student
student.age = 25;                                                                   // добавление возраста student
console.log('ex', Reflect.isExtensible(student));                                   // спрашивает можно ли расширять student
console.log(student);                                                               // Student { name: 'Igor' }


