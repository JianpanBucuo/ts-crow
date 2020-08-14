///<reference path='./components.ts' />
/**
 * 只是手动说明这个文件引用了 components，没有实际引用的作用
 */

/**
 * namespace 命名空间
 *
 * 融入模块化的思想
 */
namespace Home {
    export class Page {
        constructor() {
            new Components.Header()
            new Components.Content()
            new Components.Footer()
        }
    }
}
new Home.Page()