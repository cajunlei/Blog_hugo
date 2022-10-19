//  * time.day 和 time.dayZero 区别
//  * time.day 如果是1天 返回 1
//  * time.dayZero 如果是1天 则返回 01
//  * 除了day拥有Zero外 hour,minute,second,msec都有Zero 即小于10的，都会在前面补0

xcsoft.countdown('2030-11-12',function (time) {
    //time.days=总天数
    document.getElementById("y1").innerHTML=time.year
    document.getElementById("d1").innerHTML=time.day
    document.getElementById("h1").innerHTML=time.hourZero
    document.getElementById("i1").innerHTML=time.minuteZero
    document.getElementById("s1").innerHTML=time.secondZero
    document.getElementById("m1").innerHTML=time.msecZero
},function (time) {
    //倒计时结束后的操作
})
xcsoft.countup('2020-11-12',function (time) {
    document.getElementById("y2").innerHTML=time.year
    document.getElementById("d2").innerHTML=time.day
    document.getElementById("h2").innerHTML=time.hourZero
    document.getElementById("i2").innerHTML=time.minuteZero
    document.getElementById("s2").innerHTML=time.secondZero
})

//var nes=parseInt(new Date().getTime()/1000)+60;
//xcsoft.countdown(parseInt(nes)+'.3',function (time) {
//   document.getElementById("s3").innerHTML=time.secondZero
//    document.getElementById("m3").innerHTML=time.msecZero
//})
