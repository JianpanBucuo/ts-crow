/**
 * @title 类型描述文件
 * @description 全局变量和全局函数的定义
 */

/**
 * @description 定义全局变量
 */

// declare var $: (param: () => void) => void

/**
 * @description 定义全局函数
 *  与定义变量效果相同
 */
// declare function $(params: () => void): void
// declare function $(params: string): {
//     html: (param: string) => {}
// }


/**
 * @description 优化上述代码
 * 函数重载
 */

interface JqueryInstance {
    html: (param: string) => JqueryInstance
}

declare function $(readyFunc: () => void): void
declare function $(selector: string): JqueryInstance


/**
 * @description 通过接口的方式实现函数重载
 */

// interface Jquery {
//     (readyFunc: () => void): void
//     (selector: string): JqueryInstance
// }
// declare var $: Jquery
declare namespace $ {
    namespace fn2 {
        class init { }
    }
}

declare namespace $ {
    namespace fn {
        class init { }
    }
}
/**
 * @description 既要函数又要对象时 interface 与namespace 不能同时支持
 */

/**
 * -------------------------------------------------------------------------------------------------
 * @description 通过d.ts文件编写注解 声明模块
 * 案例 jquery
 */
declare module 'jquery' {
    interface JqueryInstance {
        html: (param: string) => JqueryInstance
    }
    function Q(readyFunc: () => void): void
    function Q(selector: string): JqueryInstance
    namespace Q {
        namespace fn {
            class init { }
        }
    }
    export = Q
}