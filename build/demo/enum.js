"use strict";
/**
 * 枚举类型
 * 包含所有状态的集合的对象
 * 解决
 */
var Status;
(function (Status) {
    Status[Status["OFFLINE"] = 0] = "OFFLINE";
    Status[Status["ONLINE"] = 1] = "ONLINE";
    Status[Status["DELETED"] = 2] = "DELETED";
})(Status || (Status = {}));
function getResult(status) {
    if (status === Status.OFFLINE) {
        return 'offline';
    }
    else if (status === Status.ONLINE) {
        return 'online';
    }
    else if (status === Status.DELETED) {
        return 'delete';
    }
    else {
        return 'error';
    }
}
var result = getResult(Status.OFFLINE);
var result2 = getResult(1);
console.log(result);
console.log(result2);
