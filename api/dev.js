/*
 * 设备信息
 * */

// 1.设备列表 dev_list
// request      ? 是否使用模糊查询
+{
    "query": "@string",         // 模糊查询 (null/型号id/设备型号/设备序列号/P2PID/当前固件版本/属主手机号/属主email)    // TODO 备注查询暂不实现
    "dev_status": "@string",    // 设备状态: varchar(16) 枚举(null/active/inactive/valid/invalid)
    "online_status": number,    // 设备在线：tinyint 枚举(null/0/1)
    "reg_date": "@date",        // 出厂日期 bigint  /null
    "pageSize": number,         // 每页数目，默认15  /null
    "startPage": number,        // 页码，默认1      /null
    "cloud_storage": "",        // 云存储 TODO 暂不实现
    "isLive": "",               // 是否正在直播 TODO 暂不实现
}

// response
+ {
    "dev_list": [
        {
            "cid": "@string",           // 设备标识: varchar(32)
            "dev_type": {               // 设备型号
                "dev_type_id": "@string",// 设备型号id: varchar(32)
                "type_name": "@string"  // 设备型号: varchar(128)
            },
            "rom_type": {               // 固件型号 TODO 暂不实现
                "type_name_current": "",// 当前版本: varchar(128)
                "type_name_newest": ""  // 最新版本: varchar(128)
            },
            "owner": [                  // 属主信息(邮箱+手机号) TODO 暂不实现
                {
                    "type": "email",    // 账号类型
                    "type_info": "@email"// 账号信息
                },
                {
                    "type": "mobile",
                    "type_info": "@mobile"
                },
                ...
            ],
            "dev_status": "@string",    // 设备状态： varchar(16) 枚举(null/active/inactive/valid/invalid) varchar(16)
            "reg_date": "@date",        // 出厂日期 bigint(timeStamp)
            "online_status": number,    // 设备在线： tinyint
            "cloud_storage": "",        // 云存储  TODO 暂不实现
            "live_onOff": number,       // 是否开通直播: tinyint TODO 暂不实现
            "dev_desp": "@string"       // 设备描述 TODO 暂不实现
        },
        ...
    ],
    "totalCount": number        // 总条目
}


// 2. 新增设备 add_dev      ????????
// request
设备型号选择[型号ID、设备名称、型号备注，单选&可刷新&可过滤]、P2P服务器选择[描述、厂商]、设备状态、设备序列号、设备secret、P2P ID、P2P secret、出厂日期、备注(暂不实现)
+ {
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
+ {
    "cid": "@string"            // 设备标识 varchar(32)
}

// response
+ {
    "cid": "@string",                   // 设备标识
    "dev_type": {                       // 设备型号信息
        "dev_type_id": "@string",       // 设备型号id
        "type_name": "@string",         // 设备型号name
    },
    "rom_type": {                       // 固件型号
        "type_name_current": "@string", // 当前版本: varchar(128)
        "type_name_newest": "@string"   // 最新版本: varchar(128)
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
    "online_status": number,            // 设备在线： tinyint
    "cloud_storage": "",                // 云存储  TODO 暂不实现
    "live_onOff": number,               // 是否开通直播: tinyint TODO 暂不实现
    "dev_desp": "备注",                  // TODO 暂不实现
    "last_modify": {
        "last_modify_admin": "@string", // 最后修改人
        "last_modify_date": "@date"     // 最后修改时间
    }
}


// 4.1 TODO 解绑设备 暂不实现

// request
+ {
    "cid": "@string"            // 设备标识 varchar(32)
}
// response
+ {
    "code": 200                 // 解绑成功
}

// 4.2 TODO 停用/启用设备 暂不实现

// request
+ {
    "cid": "@string",           // 设备标识 varchar(32)
    "dev_status": "@string"     // 设备状态：tinyint
}
// response
+ {
    "code": 200                 // 操作成功
}

// 4.3 TODO 停用/启用云存储 暂不实现

// request
+ {
    "cid": "@string",           // 设备标识 varchar(32)
    "cloud_storage": "@string"  // 云存储状态
}
// response
+ {
    "code": 200                 // 操作成功
}

// 4.4 TODO 停用/启用直播 暂不实现

// request
+ {
    "cid": "@string",           // 设备标识 varchar(32)
    "live_onOff": "@string"     // 直播开/关：tinyint
}
// response
+ {
    "code": 200                 // 操作成功
}

// 4.5 TODO 查看设备完整信息（在设备标识旁的按钮） 暂不使用

// 4.6 强制升级至指定版本

// request
+ {
    "cid": "@string",                       // 设备标识: varchar(32)
    "rom_version": "@string"                // 指定版本: varchar(128)
}

// response ? 返回结果。指令到达/更新完成
+ {
    "code": 200                 // 更新成功 枚举(200:更新完成/100:更新中)
}
