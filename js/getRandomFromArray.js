/**
 * 从一个数组中随机获取若干个不重复的元素
 */
function getRandomFromArray(arr,num){
    if(num > arr.length) return;
    var result  = [];
    for(var i = 0; i < num; i++){
        var ran = Math.floor(Math.random()*(arr.length -i));
        result.push(arr[ran]);
        arr[ran] = arr[arr.length -i -1];
    }
    return result;
}
console.log(getRandomFromArray([1,2,3,4,5,6,7,8,9,10,11,12,13],4));
function getRandomFromArray1(arr,num){
    if(num > arr.length) return;
    var result  = [];
    for(var i = 0; i < num; i++){
        var ran = Math.floor(Math.random()*arr.length);
        result.push(arr[ran]);
        arr.splice(ran,1);
    }
    return result;
}
console.log(getRandomFromArray1([1,2,3,4,5,6,7,8,9,10,11,12,13],4));