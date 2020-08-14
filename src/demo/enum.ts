/**
 * 枚举类型
 * 包含所有状态的集合的对象
 * 解决
 */


enum Status {
    OFFLINE = 0,
    ONLINE = 1,
    DELETED = 2
}
function getResult(status: number) {
    if (status === Status.OFFLINE) {
        return 'offline'
    } else if (status === Status.ONLINE) {
        return 'online'
    } else if (status === Status.DELETED) {
        return 'delete'
    } else {
        return 'error'
    }
}
const result = getResult(Status.OFFLINE)
const result2 = getResult(1)
console.log(result)
console.log(result2)