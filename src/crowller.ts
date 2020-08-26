// ts -> .d.ts 翻译文件-> js
// @types/superagent
import superAgent from 'superagent'
import fs from 'fs'
import path from 'path'
import DellAnalyzer from './dellAnalyzer'

export interface Analyzer {
    analyze: (html: string, filePath: string) => string
}
export class Crowller {
    private filePath = path.resolve(__dirname, '../data/course.json')
    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpiderProcess()
    }
    async initSpiderProcess() {
        const html = await this.getRawHTML()
        const fileContent = this.analyzer.analyze(html, this.filePath)
        this.writeFile(fileContent)
    }
    private async getRawHTML() {
        const result = await superAgent.get(this.url)
        return result.text
    }
    private writeFile(content: string) {
        console.log(content)
        fs.writeFileSync(this.filePath, content)
    }
}
const secretKey = 'PP87ANTIPIRATE'
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secretKey}`
const analyzer = DellAnalyzer.getInstance()
const crowller = new Crowller(url, analyzer)


interface BaseApplication {
    appId: number
}

export interface Application extends BaseApplication {
    init(): void
    get(key: string): object
}
class A implements Application {
    public appId: number = 1
    constructor() {
        // this.appId = 1
    }
    init() { }
    get(a: string) {
        return {}
    }
}