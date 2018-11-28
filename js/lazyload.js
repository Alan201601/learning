;(function (global){
    //console.info(win);
    var num =document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName('img');
    var n = 0; //储存图片加载到的位置，避免每次从第一章图片开始便利
    lazyload();
    //global.onscroll = lazyload;
    window.addEventListener('scroll',throttle(lazyload,500,1000));
    function lazyload(){
        var seeHeight = document.documentElement.clientHeight; //可见区域的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        for(var i = n; i< num; i++){
            if(img[i].offsetTop < seeHeight + scrollTop){
                if(img[i].getAttribute('src') === './img/view1.jpg') {
                    img[i].src = img[i].getAttribute('data-src');

                }
                n = i + 1;
            }
        }
        console.log(seeHeight);
    }
    /**
     * fun 要执行的函数
     * delay 延迟
     * time  在time时间内必须执行一次
     * 
     */
    function throttle(fun,delay,time){
        var timeout,
            startTime = new Date();
        return function (){
          var context = this;
          args = arguments,
          curTime = new Date();
          clearTimeout(timeout);
          //如果达到了规定的触发时间间隔，触发handler
          if(curTime - startTime >= time){
              fun.apply(context,args);
              startTime = curTime;
              //没有达到触发间隔，重新设定定时器
          }else {
              timeout = setTimeout(fun,delay);
          }
        }
    }

    
  
})(this);