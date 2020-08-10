// ts -> .d.ts 翻译文件-> js
// @types/superagent
import superAgent from 'superagent'
import fs from 'fs'
import path from 'path'
import DellAnalyzer from './dellAnalyzer'

export interface Analyzer {
    analyze: (html: string, filePath: string) => string
}

class Crowller {
    private filePath = path.resolve(__dirname, '../data/course.json')
    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpiderProcess()
    }
    async initSpiderProcess() {
        const html = await this.getRawHTML()
        const fileContent = this.analyzer.analyze(html, this.filePath)
        this.writeFile(fileContent)
    }
    async getRawHTML() {
        const result = await superAgent.get(this.url)
        return result.text
    }
    writeFile(content: string) {
        fs.writeFileSync(this.filePath, content)
    }
}

const secretKey = 'PP87ANTIPIRATE'
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secretKey}`
const analyzer = new DellAnalyzer()
const crowller = new Crowller(url, analyzer)