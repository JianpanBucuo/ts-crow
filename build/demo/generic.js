"use strict";
/**
 *函数泛型
 * generic
 * 泛指的类型
 */
function join(first, second) {
    return first + " " + second;
}
//需求 first是number， second只能是number
join(1, 3);
function map(params) {
    return params;
}
map(['12', '2']);
// 多个泛型
function join2(first, second) {
}
join2(1, '2');
