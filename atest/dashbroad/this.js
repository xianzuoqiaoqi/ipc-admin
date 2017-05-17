/**
 * Created by zzq on 2017/5/17.
 */
// 定义选项对象
var options = {
    height: 400,
    afterOrdered: function(e) {
        console.log('排序完成：', e);
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#dashboard').dashboard(options)