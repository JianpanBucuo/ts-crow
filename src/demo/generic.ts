/**
 *函数泛型
 * generic
 * 泛指的类型
 */

function join<T>(first: T, second: T): string {
    return `${first} ${second}`
}
//需求 first是number， second只能是number
join<number>(1, 3)

function map<T>(params: Array<T>) {
    return params
}
map<string>(['12', '2'])
// 多个泛型
function join2<T, U>(first: T, second: U) {

}
join2(1, '2')