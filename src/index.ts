import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import router from './router'

const app = express()
const port = 3000
app.use(cookieSession({
    name: 'session',
    keys: ['nic'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
    req.name = 'aaa'
    next()
})
app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// 1. express库的类型描述不准确