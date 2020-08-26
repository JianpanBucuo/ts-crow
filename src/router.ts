import { Router, Request, Response } from 'express'
import { Crowller } from './crowller'
import { DellAnalyzer } from './dellAnalyzer'
import fs from 'fs'
import path from 'path'
const router = Router()
// 类型描述不准确
interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}
router.get('/', (req: Request, res: Response) => {
    res.send(
        `
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
        </head>
        <body>
            <form method="get" action='/login'>
            <a href="/getdata">get data</a>
                <button type="submit">登录</button>
            </form>
        </body>
        </html>
        `
    )
})
router.get('/getdata', (req: RequestWithBody, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        const secretKey = 'PP87ANTIPIRATE'
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secretKey}`
        const analyzer = DellAnalyzer.getInstance()
        const crowller = new Crowller(url, analyzer)
        res.send('get Data success')
    } else {
        res.send(req.name + 'password error')
    }

})
router.post('/login', (req: Request, res: Response) => {
    const { password } = req.body
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        res.send('Login already')
    }
    if (password === '123' && req.session) {
        req.session.login = true
        res.send('Login success')
    } else {
        res.send('Login failed')
    }

})
router.get('/login', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    console.log(isLogin)
    res.send(
        `
    <!DOCTYPE html>
    <html>
    <head>
        <title></title>
    </head>
    <body>
        <form method="post" action='/login'>
            <input type="password" name="password">
            <button type="submit">确认</button>
        </form>
    </body>
    </html>
    `
    )

})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.login = undefined
    }
    res.redirect('/')
})

router.get('/showdata', (req, res) => {
    try {
        const position = path.resolve(__dirname, '../data/course.json')
        const result = fs.readFileSync(position, 'utf-8')
        res.json(JSON.parse(result))
    } catch{
        res.send('无内容')
    }

})
export default router
