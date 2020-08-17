/**
 * 类型融合机制 进行扩展
 * 新定义的 和 @types 包里的融合
 */
declare namespace Express {
    interface Request {
        name: string
    }
}

