/*
* 设备信息
* */

// 1.设备列表 dev_list
// request
+{
    "query": "@string",         // 模糊查询(null/型号id/设备型号/设备序列号/P2PID/当前固件版本/属主手机号/属主email)    // TODO 备注查询暂不实现
    "dev_status": "@string",    // 设备状态 枚举(null/active/inactive/valid/invalid)varchar(16)
    "online_status": number,    // 设备在线 枚举(null/0/1)tinyint
    "reg_date": "@date",        // 出厂日期 bigint  /null
    "pageSize": number,         // 每页数目，默认15  /null
    "startPage": number,        // 页码，默认1      /null
    "cloud_storage": "",        // TODO 暂不实现
    "isLive": "",               // TODO 暂不实现
}

// response
+{
    "cid": "@string",           // 设备标识 varchar(32)
    "dev_type": {               // 设备型号
        "dev_type_id": "",      // 设备型号id
        "type_name": "@string"  // 设备型号name
    },
    "rom_type": {               // 固件型号 TODO 暂不实现
        "type_name": "",        // 当前版本
        "type_name_newest": ""  // 最新版本
    },
    "owner": {                  // 属主信息(邮箱+手机号) TODO 暂不实现
        "email": "@email",
        "mobile": "@mobile"
    },
    "dev_status": "@string",    // 设备状态 枚举(null/active/inactive/valid/invalid) varchar(16)
    "reg_date": "@date",        // 出厂日期 bigint
    "online_status": number,    // 设备在线 枚举(null/0/1)tinyint
    "cloud_storage": "",        // 云存储  TODO 暂不实现
    "isLive": "",               // 是否开通直播 TODO 暂不实现
    "dev_desp": "备注"           // TODO 暂不实现
    "totalCount": number        // 总条目
}


// 2. 新增设备 add_dev      ????????
// request
+{
    "dev_type_id": "",              // 设备型号id
    "dev_name": "",                 // 设备名称
    "dev_type_desp": "",            // 型号备注
    "p2p_server": {
        "p2p_provider": "@string",  // p2p服务器厂商
        "p2p_desp": "@string"       // p2p描述
    },
    "dev_status": "@string",        // 设备状态 枚举(null/active/inactive/valid/invalid) varchar(16)
    "client_secret": "@string",     // 设备secret varchar(32)
    "p2pID": "@string",             // p2p ID
    "p2pSecret": "@string",         // p2p secret varchar(32)
    "reg_date": "@date",            // 出厂日期 bigint
    "dev_desp": "@string"           // 设备备注，TODO 暂不实现
}

// 3. TODO 导入设备信息 暂不实现

// 4. 设备详情页面 dev_info
// request
+{
    "cid": "@string"            // 设备标识 varchar(32)
}

// response
+{
    "cid": "@string",                   // 设备标识
    "dev_type": {                       // 设备型号信息
        "dev_type_id": "@string",       // 设备型号id
        "type_name": "@string",         // 设备型号name
    },
    "rom_type": {                       // 固件型号
        "type_name": "@string",         // 当前版本
        "type_name_newest": "@string"   // 最新版本
    },
    "dev_users": [                      // 用户列表信息
        {
            "role": number,             // 角色
            "Email": "@email",          // 邮箱
            "mobile": "@mobile"         // 手机
        },
        ...
    ],
    "dev_status": "@string",            // 设备状态 枚举(null/active/inactive/valid/invalid) varchar(16)
    "reg_date": "@date",                // 出厂日期 bigint
    "online_status": number,            // 设备在线 枚举(null/0/1)tinyint
    "cloud_storage": "",                // 云存储  TODO 暂不实现
    "isLive": "",                       // 是否开通直播 TODO 暂不实现
    "dev_desp": "备注",                  // TODO 暂不实现
    "last_modify": {
        "last_modify_admin": "@string", // 最后修改人
        "last_modify_date": "@date"     // 最后修改时间
    }
}


// 4.1 TODO 解绑设备 暂不实现
// 4.2 TODO 停用/启用设备 暂不实现
// 4.3 TODO 停用/启用云存储 暂不实现
// 4.4 TODO 停用/启用直播 暂不实现
// 4.5 TODO 查看设备完整信息（在设备标识旁的按钮） 暂不使用
// 4.6 强制升级至指定版本

// request
+{
    "cid": "@string",
    "rom_type": {
        "current_type_name": "@string",     // 当前版本
        "to_type_name": "@string"           // 指定版本
    }
}

// response ?????? 返回结果。指令到达/更新完成
+{
    "code": 200                 // 更新成功
}
