typescript --save-dev
ts-node  简化开发成本
npx tsc


tsc init 
初始化 typescript

## 单例模式

类不能被外部实例化

```js
  "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "ts-node ./src/crowller.ts",
        "build": "tsc -w" //自动监控文件改变，自动打包
    },
```
nodemon 自动监测文件变化，并执行命令
concurrently 并行执行命令行工具


ts引用 js文件需要引用
@types/npmpackage

或者编写类型(注解)文件

