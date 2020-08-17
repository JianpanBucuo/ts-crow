// /**
//  * declare 声明
//  */

// interface JqueryInstance {
//     html: (html: string) => JqueryInstance
// }

// // declare function $(params: string): {
// //     html: (html: string) => {}
// //     append: (html: string) => {}
// // }
// declare function $(readyFunc: () => void): void
// declare function $(selector: string): JqueryInstance
// // 声明对象 命名空间的嵌套


//函数重载
// interface Jquery {
//     (readyFunc: () => void): void
//     (selector: string): JqueryInstance
//     (html: string): JqueryInstance
// }
// declare var $: Jquery

// declare namespace $ {
//     namespace fn {
//         //对类进行类型定义
//         class init { }
//     }
// }