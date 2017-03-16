Showphoto();
//图片切换
function Showphoto(){
	//先获取左边标题li标签
	var lis=document.getElementsByClassName("bg");
	//获取右边的七个div
	var div=document.getElementsByClassName("outer-right");
	var obj=document.getElementsByClassName("cz"); //获取第一个标题文字
// //鼠标放在找课程 先加载第一个表标题事件
lis[0].style.backgroundColor="#fff";
div[0].style.display="block";
var obj1=document.getElementsByClassName("outer-left")[0];
for(var i=0;i<lis.length;i++){
	lis[i].index=i;//找出每一li的小标
	lis[i].onmouseover=function(){
		var aa = obj1.querySelectorAll('.line>a')
		var aaa = this.querySelectorAll('.line>a')
		//console.log(aa);
		for(var i=0;i<lis.length;i++){
			lis[i].style.backgroundColor="#39A030";
			div[i].style.display="none";
		}
		for(var x=0;x<aa.length;x++){
			aa[x].style.color = "#fff"
		}
		this.style.backgroundColor="#fff";
		div[this.index].style.display="block";
		for(var y=0;y<aaa.length;y++){
			aaa[y].style.color = "#333"
		}
	}
	}
// 点击错号关闭整个li
var wrong=document.getElementsByClassName("wrong");
var head=document.getElementsByClassName("header-outer")[0];
var kecheng=document.getElementsByClassName("title")[0];
for(var i=0;i<wrong.length;i++){
	wrong[i].index=i;
	wrong[i].onclick=function(){
		head.style.display="none";
	}
}
//这里没有写out事件 控制关闭用x;
kecheng.onmouseover=function(){
	lis[0].style.backgroundColor="#fff";
	div[0].style.display="block";
	head.style.display="block";
}
// 去掉下划线
var underline=document.getElementsByClassName("title");
for(var i=0;i<underline.length;i++){
	underline[i].index=i;
	underline[i].onmouseover=function(){
		underline[this.index].style.textDecoration="none";
}
}

//课程切换
var course=document.getElementsByClassName("middle-left")[0]; //获取课程的div
var sh=document.getElementsByClassName("kc")[0];//获取课程
var off=document.getElementsByClassName("of")[0]; //获取到提供方div
var triangle=document.getElementsByClassName("middle-left-border")[0];//获取倒三角
//先绑定over out事件 
course.onmouseover=function(){
	sh.style.color="#39A030";
	triangle.style.borderTopColor="#39A030";
}
course.onmouseout=function(){
	sh.style.color="";
	triangle.style.borderTopColor="";
}
// 绑定课程切换click事件
var cz=document.getElementsByClassName("Popularnoun")[0]; //获取热门ul
var all=document.getElementsByClassName("middle-all")[0];//获取第二层div
var o=document.getElementsByClassName("off")[0];//获取空p标签
var fn=document.getElementsByClassName("way")[0];
var n=0; //全局判断 
sh.onclick=function(){ //课程绑定事件
	if(n==1){  //当n=1的时候  执行下面代码
		off.style.display="block";
		n=0;
		off.style.display="none";
		cz.style.display="none";
		fn.innerHTML="课程";
		off.style.display="none";
	}else if(n==0){
		off.style.display="block";// 第一次点击课程的时候 n的值等于0 提供方显示
		n=1;
	}
}
var m=0;
var SEEK=document.getElementsByClassName("seek")[0]; //获取搜索框
off.onclick=function(){
	 if(m==0){
		off.style.display="none";
		sh.innerHTML=fn.innerHTML;
		triangle.style.left="14px";
		cz.style.display="block";
}
	SEEK.style.left="296px";
	ul.style.display="block";
	ul.style.left="39px";
	ul.style.top="50px";
	ul.style.width = "312px";
	all.style.width = "330px";
	all.style.left="-17px";
	all.style.borderColor="#33a126 #33a126";
	all.style.transition="width 0.5s";
	cz.style.transform="scale(1.25)"; 
}
//input点击事件
var inp=document.getElementById("inp");//获取到输入框
var ul=document.getElementsByClassName("Popularnoun")[0];//式获取到ul列表
var SEEK=document.getElementsByClassName("seek")[0]; //获取搜索框
inp.onclick=function(){
	if(ul.style.display=="block"){
		ul.style.display="none";
	}else{
	SEEK.style.left="296px";
	ul.style.display="block";
	ul.style.left="39px";
	ul.style.top="50px";
	ul.style.width = "312px";
	all.style.width = "330px";
	all.style.left="-17px";
	all.style.borderColor="#33a126 #33a126";
	all.style.transition="width 0.5s";
	ul.style.transform="scale(1.25)";
	}	
}

};