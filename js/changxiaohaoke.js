//图片缩放
active(); //加载完页面之后 调用此函数
function active(){
	var Img=document.getElementsByClassName("center-left")[0];
		Img.onmouseover=function(){
			var IMG=document.getElementById('ph'); 
				IMG.style.transform="scale(1.1)"; //图片缩放
				IMG.style.transition="all 2s"; //图片所需要的时间
		}
		Img.onmouseout=function(){
			var IMG=document.getElementById('ph'); 
				IMG.style.transform="scale(1)"; //图片缩放
		}
//六张小图片的缩放
	var ch=document.getElementsByClassName("CH");
	var p=document.getElementsByClassName("P");
	var paragraph=document.querySelectorAll(".shade a");
	for(var i=0;i<ch.length;i++){
		ch[i].index=i;
		ch[i].onmouseover=function(){
			p[this.index].style.transform="scale(1.1)";
			p[this.index].style.transition="all 2s";
			paragraph[this.index].style.color=" #39A030"; //字体变颜色
		}
		ch[i].onmouseout=function(){ 
				p[this.index].style.transform="scale(1)"; //图片还原
				paragraph[this.index].style.color="";//字体颜色清空
		}
	}
// 右下角
	var Right=document.getElementsByClassName("wps")[0];
	var right=document.querySelectorAll(".wps img")[0];
	Right.onmouseover=function(){
		right.style.transform="scale(1.1)"; //图片缩放
		right.style.transition="all 2s"; //图片所需要的时间
		}
	Right.onmouseout=function(){
		right.style.transform="scale(1)"; //图片缩放
		}
};