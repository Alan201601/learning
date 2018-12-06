/**
 * 生成随机数js （生成浮点型，伪随机数字[0，1)）
 * 
 */



 //创建一个【0，1）的随机数
function getRadom(){
    return Math.random();
}
var random = getRadom();
//console.log(random);

//得到一个两数之间的随机数
function getRandomArbitrary(min,max){
    return Math.random()*(max-min)+min;
}
//console.log(getRandomArbitrary(2,4));
//console.log(getRandomArbitrary(3.2,6));

//得到一个两数之间的随机整数
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}
//console.log(getRandomInt(3.5,6.7));
//得到一个两个数之间的随机整数，包括两个数字在内
function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomIntInclusive(2,5));



//[0,1)
function getRandom1(){
    return Math.random();
}
console.log('获取[0,1)之间的随机数:'+getRandom1());

// (2,5) 两个数之间的随机数
function getRadomBetTwo(min,max){
    return Math.random()*(max - min) + min;
}
console.log('获取两个数字之间的随机数正数'+getRadomBetTwo(2,5));
console.log('获取两个数字之间的随机数负数'+getRadomBetTwo(-5,-2));

//获得两个数字之间的随机整数
function getRandomInt1(min,max){
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random()*(max-min)) + min;

}
console.log("获取两个数之间的随机整数"+ getRandomInt1(2,6));

//获取两个数字之间的随机整数，包括这两个数字
function getRandomIntInclusive1(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)) + min;

}
console.log("获取两个数字之间的随机整数，包含这两个数字"+ getRandomIntInclusive1(3,7));