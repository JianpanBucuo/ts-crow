
// 类型保护
/**
 * 类型断言
 * in语法
 * typeof
 * instanceof
 */
interface Bird {
    fly: boolean
    sing: () => {}
}
interface Dog {
    fly: boolean
    bark: () => {}
}
function trainAnimal(animal: Bird | Dog) {
    // 类型断言
    if (animal.fly) {
        (animal as Bird).sing()
    } else {
        (animal as Dog).bark()
    }
}
function trainAnimalSecond(animal: Bird | Dog) {
    // in 语法做类型保护
    if ('sing' in animal) {
        animal.sing()
    } else {
        animal.bark()
    }
}

function add(first: string | number, second: string | number) {
    //  typeof 语法做类型保护
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first} ${second}`
    }
    return first + second
}

class NumberObject {
    constructor(public count: number) {
    }
}
function addSecond(first: object | NumberObject, second: object | NumberObject) {
    //  instanceof 语法做类型保护
    if (first instanceof NumberObject && second instanceof NumberObject) {
        return first.count + second.count
    }
    return 0
}