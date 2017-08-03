/*
* 设备类型
* */

// 1、设备型号列表dev_type_list

// request
+{
    "dev_type_id": "",          // 设备型号id
    "type_name": "",            // 型号名
    "type_desp": "型号描述",     // 备注
    // TODO 固件版本号查询暂不实现
    "rom_type": "@string",      // 暂不实现
    "last_rom_date": "@date",   // 最新固件日期
    "pageSize": number,         // 每页数目
    "startPage": number         // 页码
}

// response
+{
    "dev_type_list": [
        {
            "dev_type_id": "@string",           // 设备型号id
            "type_name": "",                    // 设备型号
            "type_desp": "型号描述",             // 备注
            // TODO 固件版本号展示 暂不实现
            "last_rom": {                       // 最新固件
                "last_rom_type": "@string",     // 最新固件版本号
                "last_rom_date": "@date",       // 最新固件更新日期
            },
            "last_modify": {
                "last_modify_admin": "@string", // 最后修改人
                "last_modify_date": "@date"     // 最后修改时间
            }
        },
        ...
    ],
    "totalCount": number                        // 总条数
}


// 2、设备型号详情页 dev_type_info
// 2.1 信息展示
// request
+{
    "dev_type_id": "@string"                // 设备型号id varchar(32)
}
// response
+{
    "dev_type_id": "@string",               // 设备型号id
    "type_name": "@string",                 // 设备型号名称
    "type_desp": "@string",                 // 设备型号备注
    "dev_roles": [                          // 角色
        {
            "role": number,                 // 角色代码 int
            "role_desp": "@string",         // 角色描述
            "role_status": "invalid",       // 角色状态(valid/invalid)
            "role_ability": {               // 角色能力(json)

            },
        },
        ...
    ],
    "rom_type_list": [                   // 固件版本列表
        {
            "type_name": "@string",      // 固件版本号varchar(128)
            "type_desp": "@string",      // 升级描述varchar(128)
            "date": "@date"              // 升级日期bigint
        },
        ...
    ],
    "last_modify": {                     // 最后修改
        "last_modify_admin": "@string",  // 最后修改人
        "last_modify_date": "@date"      // 最后修改日期
    }
}

// 2.2 修改设备型号、型号备注、最后修改时间、角色能力、固件版本
/*
* 分三个接口
* 2.2.1：修改设备型号、型号备注
* 2.2.2：修改角色能力及添加角色
* 2.2.3：修改固件版本及添加版本
* */

// 2.2.1: 修改设备型号、型号备注
// request
+{
    "dev_type_id": "@string",                // 设备型号id varchar(32)
    "dev_type_info":{
        "type_name": "@string",              // 设备型号名称
        "type_desp": "@string"               // 设备型号备注
    },
    "modify_admin": "role"                   // 修改人
}

//response
+{
    "code": 200,                            // 修改成功
    "last_modify": {                        // 最后修改
        "last_modify_admin": "@string",     // 最后修改人
        "last_modify_date": "@date"         // 最后修改日期
    }
}

// 2.2.2:修改角色能力及添加角色
// request
+{
    "dev_type_id": "@string",               // 设备型号id
    "dev_roles":{                           // 角色(新增或修改)
        "role": number,                     // 角色代码 int
        "role_desp": "@string",             // 角色描述
        "role_status": "invalid",           // 角色状态(valid/invalid)
        "role_ability": {                   // 角色能力(json)
            ...
        },
    },
    "modify_admin": "role"                   // 修改人
}

//response
+{
    "code": 200,                            // 修改成功
    "last_modify": {                        // 最后修改
        "last_modify_admin": "@string",     // 最后修改人
            "last_modify_date": "@date"     // 最后修改日期
    }
}

// 2.2.3: 修改固件版本及添加版本
// request
+{
    "dev_type_id": "@string",               // 设备型号id
    "rom_type":{                            // 固件版本（新增或修改）
        "type_name": "@string",             // 固件版本号varchar(128)
        "type_desp": "@string",             // 升级描述varchar(128)
        "date": "@date"                     // 升级日期bigint
    },
    "modify_admin": "role"                  // 修改人
}
//response
+{
    "code": 200,                            // 修改成功
    "last_modify": {                        // 最后修改
        "last_modify_admin": "@string",     // 最后修改人
        "last_modify_date": "@date"         // 最后修改日期
    }
}