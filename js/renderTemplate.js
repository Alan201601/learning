/**
 * 实现一个简单的模版引擎
 */
let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let data = {
    name:'max',
    age: 18,
    sex: '男'
}
render(template,data);
function render(template,data){
    const reg = /\{\{(\w+)\}\}/; //模版字符串正则
    if(reg.test(template)) { //判断模版里是否有模版字符串
        const name = reg.exec(template)[1];//查找当前模版里的第一个
        template = template.replace(reg,data[name])

    }
}