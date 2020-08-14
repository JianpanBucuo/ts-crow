/**
 * declare 声明
 */
declare var $: (params: () => void) => void
declare function $(params: () => void): void
declare function $(params: string): {
    html: (html: string) => {}
}
declare function $(params: string): {
    append: (html: string) => {}
}

declare namespace myLib {
    function makeGreeting(s: string): string
}