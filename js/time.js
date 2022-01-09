//开发中我们需要计算一条动态的发布时间，一般我们得到的是一条日期字符串，我们需要计算当前时间和动态的发布时间，计算它们的差值来判断发布在什么时候
//Date.parse() 解析一个日期时间字符串，并返回1970/1/1 午夜距离该日期时间的毫秒数
//var nDays = Math.abs(parseInt((time2 - time1)/1000/3600/24));
// 获取当前时间戳(以s为单位)
function setTime(time,timeSelector){
  var currentTime = Date.parse(new Date());
  var dateTime = time;//后台传递来的时间
  var ts = timeSelector;//选择器
  var d_day = Date.parse(new Date(dateTime));
  var day = Math.abs(parseInt((d_day - currentTime)/1000/3600/24));//计算日期
  var hour = Math.abs(parseInt((d_day - currentTime)/1000/3600));//计算小时
  var minutes = Math.abs(parseInt((d_day - currentTime)/1000/60));//计算分钟
  var seconds = Math.abs(parseInt((d_day - currentTime)/1000));//计算秒
  console.log(day);
  if(day >= 2){
    ts.text(parseInt(day)+"天前").toString();
  }else if(day > 0 && day < 2){
    ts.text("昨天").toString();
  }else if(hour > 0 && hour < 24){
    ts.text(parseInt(hour)+"小时前").toString();
  }else if(minutes > 0 && minutes < 60){
    ts.text(parseInt(minutes)+"分钟前").toString();
  }else if(seconds > 0 && seconds < 60){
    ts.text(parseInt(seconds)+"秒前").toString();
  }
}
//列表里面调用方法，传递两个参数 数据库时间和选择器
$(".one-comment").each(function(){
var t_time = $(this).find(".time").text();
var timeSelector = $(this).find(".time");
setTime(t_time,timeSelector);
})
