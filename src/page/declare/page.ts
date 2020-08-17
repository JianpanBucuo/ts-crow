interface Person {
    name: string
    age: string
}

class Teacher {
    constructor(private info: Person) {

    }
    getInfo<T extends keyof Person>(key: T) {
        // if (key === 'name' || key === 'age') {
        // return this.info[key]
        // }
        return this.info[key]

    }
}
const teacher = new Teacher({
    name: 'nic', age: '11'
})
const test = teacher.getInfo('name')
const x = teacher.getInfo('age')
console.log(test, x)