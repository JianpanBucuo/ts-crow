namespace Components {
    export class Header {
        constructor() {
            const ele = document.createElement('div')
            ele.innerHTML = 'Header'
            document.body.appendChild(ele)
        }
    }
    export class Content {
        constructor() {
            const ele = document.createElement('div')
            ele.innerHTML = 'Content'
            document.body.appendChild(ele)
        }
    }
    export class Footer {
        constructor() {
            const ele = document.createElement('div')
            ele.innerHTML = 'Footer'
            document.body.appendChild(ele)
        }
    }
}