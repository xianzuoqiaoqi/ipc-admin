/*
* 设备类型
* */

// 1、设备型号列表dev_type_list

// request   ？是否使用模糊查询
+{
    "query": "@string",         // 模糊查询：型号ID、设备型号、型号备注、固件版本号(暂不实现)  / null

    "dev_type_id": "@string",   // 设备型号id: varchar(32) / null
    "type_name": "@string",     // 型号名: varchar(128) / null
    "type_desp": "@string",     // 备注: varchar(128) / null
    "rom_type": "@string",      // 固件版本号：varchar(128) / null TODO 固件版本号查询暂不实现
    "last_rom_date": "@date",   // 最新固件日期：bigint(timeStamp) / null
    "pageSize": number,         // 每页数目
    "startPage": number         // 页码
}

// response
+{
    "dev_type_list": [
        {
            "dev_type_id": "@string",            // 设备型号id: varchar(32)
            "type_name": "@string",              // 型号名: varchar(128)
            "type_desp": "型号描述",              // 备注: varchar(128)
            // TODO 固件版本号展示 暂不实现
            "last_rom": {                       // 最新固件
                "last_rom_type": "@string",     // 最新固件版本号: varchar(32)
                "last_rom_date": "@date",       // 最新固件更新日期: bigint(timeStamp)
            },
            "last_modify": {
                "last_modify_admin": "@string", // 最后修改人
                "last_modify_date": "@date"     // 最后修改时间: bigint(timeStamp)
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
    "dev_type_id": "@string"                // 设备型号id: varchar(32)
}
// response
+{
    "dev_type_id": "@string",               // 设备型号id: varchar(32)
    "type_name": "@string",                 // 设备型号名称: varchar(128)
    "type_desp": "@string",                 // 设备型号描述: varchar(128)
    "dev_roles": [                          // 角色能力列表
        {
            "role": number,                 // 角色代码 int
            "role_desp": "@string",         // 角色描述
            "role_status": "invalid",       // 角色状态: varchar(16)(valid/invalid)
            "role_ability": {               // 角色能力(json)
                ...
            },
        },
        ...
    ],
    "rom_type_list": [                   // 固件版本列表
        {
            "type_name": "@string",      // 固件版本号: varchar(128)
            "type_desp": "@string",      // 升级描述: varchar(128)
            "date": "@date",             // 升级日期: bigint
            "update_address": "@string"  // 升级地址: varchar(32)
        },
        ...
    ],
    "last_modify": {                     // 最后修改
        "last_modify_admin": "@string",  // 最后修改人
        "last_modify_date": "@date"      // 最后修改时间: bigint(timeStamp)
    }
}

// 2.2 修改设备型号、型号备注、最后修改时间、角色能力、固件版本
/*
* 分三个接口
* 2.2.1：修改设备型号、型号备注
* 2.2.2：修改角色能力及添加角色
* 2.2.3：上传app
* 2.2.4: 修改/添加固件版本
* */

// 2.2.1: 修改设备型号、型号备注
// request
+{
    "dev_type_id": "@string",                // 设备型号id varchar(32)
    "dev_type_info":{
        "type_name": "@string",              // 设备型号名称: varchar(128)
        "type_desp": "@string"               // 设备型号描述: varchar(128)
    },
    "modify_admin": "role"                   // 修改人
}

//response
+{
    "code": 200,                            // 修改成功
    "last_modify": {                        // 最后修改
        "last_modify_admin": "@string",     // 最后修改人
        "last_modify_date": "@date"         // 最后修改日期: bigint(timeStamp)
    }
}

// 2.2.2:修改角色能力及添加角色    ? 是否分两个接口或者request标明是(新增/修改)
// request
+{
    "dev_type_id": "@string",               // 设备型号id varchar(32)
    "dev_roles":{                           // 角色(新增或修改)
        "role": number,                     // 角色代码 int
        "role_desp": "@string",             // 角色描述
        "role_status": "invalid",           // 角色状态: varchar(16) (valid/invalid)
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
        "last_modify_date": "@date"         // 最后修改日期: bigint(timeStamp)
    }
}
// 2.2.3 上传app

// request

// response
+{
    "code": 200,                // 上传成功
    "update_address": "@string" // 升级地址: varchar(32)
}
// 2.2.4: 修改固件版本及添加版本    上传app
// request
+{
    "dev_type_id": "@string",               // 设备型号id varchar(32)
    "rom_type":{                            // 固件版本（新增或修改）
        "type_name": "@string",             // 固件版本号: varchar(128)
        "type_desp": "@string",             // 升级描述: varchar(128)
        "update_address": "@string",        // 升级地址: varchar(32) 使用上传成功自动生成的地址或者人工填写的地址均可
        "date": "@date"                     // 升级日期: bigint(timeStamp)
    },
    "modify_admin": "role"                  // 修改人
}
//response
+{
    "code": 200,                            // 修改成功
    "last_modify": {                        // 最后修改
        "last_modify_admin": "@string",     // 最后修改人
        "last_modify_date": "@date"         // 最后修改日期 bigint(timeStamp)
    }
}