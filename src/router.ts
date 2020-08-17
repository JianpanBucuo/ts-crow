import { Router, Request, Response } from 'express'
import { Crowller } from './crowller'
import { DellAnalyzer } from './dellAnalyzer'
const router = Router()
// 类型描述不准确
interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}
router.get('/', (req: Request, res: Response) => res.send('Hello World!'))
router.post('/getdata', (req: RequestWithBody, res: Response) => {
    console.log(req)
    const { password } = req.body
    if (password === '123') {
        const secretKey = 'PP87ANTIPIRATE'
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secretKey}`
        const analyzer = DellAnalyzer.getInstance()
        const crowller = new Crowller(url, analyzer)
        res.send('get Data success')
    } else {
        res.send(req.name + 'password error')
    }

})
router.get('/login', (req: Request, res: Response) => {
    res.send(
        `
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
        </head>
        <body>
            <form method="post" action='/getdata'>
                <input type="password" name="password">
                <button type="submit">确认</button>
            </form>
        </body>
        </html>
        `
    )
})
export default router