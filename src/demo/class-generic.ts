interface Item {
    name: string
}
class DataManager<T extends Item> {
    constructor(private data: T[]) {

    }
    getItem(index: number): string {
        return this.data[index].name
    }
}
const data = new DataManager<Item>([{ name: '1' }])

console.log(data.getItem(0), data.getItem(1))


const func: <T>(params: T) => T = <T>(params: T) => {
    return params
}