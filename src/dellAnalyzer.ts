import cheerio from 'cheerio'
import fs from 'fs'
import { Analyzer } from './crowller'
interface Course {
    title: string
}
interface CouseResult {
    time: number,
    data: Course[]
}
interface Content {
    [propName: number]: Course[]
}
class DellAnalyzer implements Analyzer {
    private getCourseInfo(html: string) {
        const courseInfos: Course[] = []
        const $ = cheerio.load(html)
        const courseItem = $('.course-item')
        courseItem.map((v, i) => {
            const desc = $(i).find('.course-desc').eq(0).text()
            courseInfos.push({
                title: desc
            })
        });
        const result: CouseResult = {
            time: (new Date()).getTime(),
            data: courseInfos
        }
        return result
    }
    generateJsonContent(courseInfo: CouseResult, filePath: string) {
        let fileContent: Content = {}
        if (fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }
        fileContent[courseInfo.time] = courseInfo.data
        console.log(fileContent)
        return fileContent
    }
    public analyze(html: string, filePath: string) {
        const courseInfo = this.getCourseInfo(html)
        const fileContent = this.generateJsonContent(courseInfo, filePath)
        return JSON.stringify(fileContent)
    }
}

export default DellAnalyzer