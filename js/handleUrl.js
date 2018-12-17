/**
 * 将url的参数生成对象，如果key相同，则放到同一个数组中
 *
 */
function handleUrl(url){
    let obj = {};
    // const index = url.indexOf('?');
    // const paramsStr = url.slice(index+1);
    const reg = /.+\?(.+)$/
    //const paramsStr = /.+\?(.+)$/.exec(url)[1];
    //const paramsStr =  /.+\?(.+)$/.exec(url)[1];
    const paramsStr = /.+\?(.+)$/.exec(url)[1];
    //console.log(/.+\?(.+)$/.exec(url));
    //console.log(paramsStr);
    
    const paramsArr = paramsStr.split("&");
    let paramsObj = {};
    paramsArr.forEach(param => {
        if(/=/.test(param)){//判断有value的参数
            let [key,val] = param.split('=');//分割key和value
            val = decodeURIComponent(val);//解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val;//判断是否转为数字

            if(paramsObj.hasOwnProperty(key)){//如果对象有key，则添加一个val
                paramsObj[key] = [].concat(paramsObj[key],val);
                //console.log([].concat(paramsObj[key],val));
            }else {//没有key则创建key

                paramsObj[key] = val;
            }
        }else {//处理没有value的参数
            paramsObj[param] = true;
        }
    })

    //console.log(paramsArr);
    return paramsObj;
}
//console.log(handleUrl('https://www.baidu.com/?name=aa&age=89'));
//console.log(handleUrl('http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'));

function handleURL1(url){
    const reg = /.+\?(.+)$/;
    const paramsStr = reg.exec(url)[1];
    //return reg.exec(url);
    const paramArr = paramsStr.split('&');
    let paramObj = {};
    paramArr.forEach(param =>{
       if(/=/.test(param)){//has value
         let [key,val] = param.split('=');//分割key和val
         val = decodeURIComponent(val);//解码
         val = /^\d+$/.test(val) ? parseFloat(val) : val;//判断是否转换为数字
         if(paramObj.hasOwnProperty(key)){//如果对象有key，则添加一个val
            paramObj[key] = [].concat(paramObj[key],val);
         }else {
            paramObj[key] = val;
         }

       }else { //no value
         paramObj[param] = true;
       }
    })

    return paramObj;
}
console.log(handleURL1('http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled&job=999'));


