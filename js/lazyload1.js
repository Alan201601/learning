;(function(global){
    var num = document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName('img');
    var n = 0;//存储图片加载到的位置，避免每一次从第一张开始遍历
    lazyload();
   // window.onscroll = lazyload;
    window.addEventListener('scroll',throttle(lazyload,500,1000));
    function lazyload(){
        var seeHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for(var i = n ; i < num ; i++){
            if(img[i].offsetTop < seeHeight + scrollTop){
                if(img[i].getAttribute('src') === './img/view1.jpg') {
                    img[i].src = img[i].getAttribute('data-src');
                }
                n = i + 1;
            }
        }
        //console.log(scrollTop);
    }
    //函数截流
    /**
     * fun 要执行的函数
     * delay 延迟
     * time  在time时间内必须执行一次
     * 
     */
    function throttle(fun,delay,time){
        var timeout,
            startTime = new Date();
        return function(){
            var context = this,
            args = arguments,
            curTime = new Date();
            clearTimeout(timeout);
             //如果达到了规定的触发时间间隔，触发handler
            if(curTime - startTime >= time){
                console.log(context,args);
                fun.apply(context,args);
                startTime = curTime;
                //没有达到触发间隔，重新设定定时器
            }else {
                timeout = setTimeout(fun,delay);
            }
        }    
    }
    

})(this);