import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import router from './router'

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
    req.name = 'aaa'
    next()
})
app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// 1. express库的类型描述不准确