/**
 * 通过新建一个图片，进行数据上传
 */
function report1(url, data) {
    // var img = new Image();
    // var time = new Date().getTime();
    // var uniqueId = "log_" + time;
    // //window[uniqueId] = img; //在全局对象中存贮变量，防止浏览器垃圾回收机制在没有发起上报之前清除
    // var url = "https://www.baidu.com" + '?v=' + time + '&' + formatParams(_errorList);
    // //console.log("url:" + url);
    // // img.onload = img.onerror = function () { //销毁一些对象
    // //     img.onload = img.onerror = null;
    // //     window[uniqueId] = null;
    // // };
    // // img.src = url;
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/r.png", true); // true表示异步
    // xhr.send(JSON.stringify(_errorList));
    // _errorList = [];
    //var errorLength = _errorList.length;
    var time = new Date().getTime();
    var uniqueId = "log_" + time;
    var _url = url;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", _url, true); // true表示异步
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //xhr.setRequestHeader('logenname', 'app-mobile-web-error');
    xhr.setRequestHeader('logenname', 'app-mobile-web-perf');
    xhr.send(JSON.stringify(data));
    var _url = 'http://10.23.14.136/applog/sendjsonlog1';
    if(url == _url) {
        xhr.abort();
    }
    //_errorList = [];
    //var errorLength = _errorList.length;
    console.log(JSON.stringify(data));

}