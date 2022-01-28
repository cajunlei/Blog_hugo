/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 点击频率，点击几次就换文字 */
		var frequency = 1;
		if (a_click % frequency === 0) {
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
		}
	a_click ++;
    });
});

$(function () {
	/* 轮播背景图片 */
	$.backstretch([
		  $cdnPrefix + "/Background/saber1.webp",
		  $cdnPrefix + "/Background/001.webp",
			$cdnPrefix + "/Background/saber2.webp",
		  $cdnPrefix + "/Background/101.webp",
		  $cdnPrefix + "/Background/saber3.webp",
		  $cdnPrefix + "/Background/201.webp",
	], { duration: 60000, fade: 1000 });
	/*  点击滚动到顶部 */
	$('#back-to-top').click(function () {
		$('html,body').animate({
			scrollTop: '0px'
		}, 500);
			return false;
		});
	/*  点击滚动到底部 */
	$('#back-to-bottom').click(function () {
		$('html,body').animate({
			scrollTop: document.getElementsByTagName('BODY')[0].scrollHeight
		}, 500);
		return false;
	});
});

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/images/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/images/favicon-32x32.png");
      document.title = '你快回来！- 雷雷的个人博客';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/images/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/images/favicon-32x32.png");
      document.title = '欢迎回来！- 雷雷的个人博客';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}
