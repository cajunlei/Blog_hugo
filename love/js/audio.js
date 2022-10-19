// 点击页面，自动开始播放音乐

window.onload = function(){
  setInterval("toggleSound()",1);
}

function toggleSound() {
     var music = document.getElementById("audio");//获取ID  
     if (music.paused) { //判读是否播放  
         music.paused=false;
         music.play(); //没有就播放 
     }    
}
