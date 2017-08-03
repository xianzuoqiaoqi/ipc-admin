/*
* app升级管理
* */

// 1. app 列表  app_list
// request
+{
    "startPage": number,     // 查询页  默认值1
    "pageSize": number       // 每页数目 默认15
}

// response
+{
    "app": {                        // app信息
        "appID": "@string",             // appID varchar(32)
        "app_name": "@string",          // app名称 varchar(128)
        "app_desp": "@string",          // app描述 varchar(128)
        "app_status": "@string",        // app状态 varchar(16) 枚举 ["active","inactive","invalid"]
    },
    "getui": {
        "getui_appid": "@string",       // 个推appid varchar(32)
        "getui_appkey": "@string",      // 个推appkey varchar(32)
        "getui_status": "@string"       // 个推状态 varchar(16)
    },
    "app_version": {
        "version": "@string",           // 版本号 varchar(128)
        "version_desp": "@string",      // 版本描述 varchar(1024)
        "update_address": "@string",    // 版本下载地址 varchar(128)
        "app_size": "@string",          // 文件大小 varchar(32)
        "version_date": "@date"         // 版本日期 bigint
    },
    "totalCount": number                // 总条目
}


// 2. 新增app
// request
+{
    "app": {                        // app信息
        "appID": "@string",             // appID varchar(32)
        "app_name": "@string",          // app名称 varchar(128)
        "app_desp": "@string",          // app描述 varchar(128)
        "app_status": "@string",        // app状态 varchar(16) 枚举 ["active","inactive","invalid"]
    },
    "getui": {
        "getui_appid": "@string",       // 个推appid varchar(32)
        "getui_appkey": "@string",      // 个推appkey varchar(32)
        "getui_status": "@string"       // 个推状态 varchar(16)
    }
}

// response
+{
    code: 200           // 新增成功
}

// 3. app详情
//