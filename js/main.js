/**
 * Created by lenovo on 17/12/7 007.
 */
<!-- Initialize Swiper -->
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//音乐处理开始
var music=document.getElementById("music");
var musicbg=document.querySelector(".musicbg");
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio1=document.getElementById("audio");

//添加点击事件
var flag=1;
music.onclick=function(){
    if(flag==1){
        musicbg.style.display="none";
        musicImg.style.animation="none";
        audio1.pause();//停止播放
        flag=0;
    }else{
        musicbg.style.display="block";
        musicImg.style.animation="music 4s linear infinite";
        audio1.play(); //播放
        flag=1;
    }
};