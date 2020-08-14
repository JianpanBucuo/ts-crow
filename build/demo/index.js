"use strict";
function trainAnimal(animal) {
    // 类型断言
    if (animal.fly) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
function trainAnimalSecond(animal) {
    // in 语法做类型保护
    if ('sing' in animal) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
function add(first, second) {
    //  typeof 语法做类型保护
    if (typeof first === 'string' || typeof second === 'string') {
        return first + " " + second;
    }
    return first + second;
}
var NumberObject = /** @class */ (function () {
    function NumberObject(count) {
        this.count = count;
    }
    return NumberObject;
}());
function addSecond(first, second) {
    //  instanceof 语法做类型保护
    if (first instanceof NumberObject && second instanceof NumberObject) {
        return first.count + second.count;
    }
    return 0;
}
