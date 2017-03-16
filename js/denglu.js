var Form=document.getElementsByClassName('DCL_down')
var Delu=document.getElementsByClassName('DCL_up')[0].getElementsByTagName('div')
var Denglu=document.getElementsByClassName('Denglu')[0]
var Closervar=document.getElementsByClassName('Closer')[0]
// 关闭
Closervar.onclick=function(){
	zhuC.style.display='none'
	bigBG.style.display='none'
}
// 登录注册
var DL_ZC=document.getElementById('DL_ZC')
var bigBG=document.getElementById('bigBG')
DL_ZC.onclick=function(){
	bigBG.style.display='block'
	zhuC.style.display='block'
	zhuC.style.top='300px'
}


DE_l.onclick=function(){
	var heiG=window.screen.height/2
	console.log(heiG)
	bigBG.style.display='block'
	zhuC.style.display='block'
    zhuC.style.top=document.body.scrollTop+heiG+'px'
    zhuC.style.marginTop='-240px'
}
// 切换登录
for(var i=0;i<Delu.length;i++){
	Delu[i].index=i
	Delu[i].onclick=function(){		
		for(var i=0;i<Delu.length;i++){
			Form[i].style.display='none'
			Delu[i].style.color= '#999999'
			Delu[i].style.borderBottom='3px solid #EBEBEB'
		}
		Form[this.index].style.display='block'
		this.style.color= '#333333'
		this.style.borderBottom='3px solid #2AA126'
	}
}
// ----------------------
var Delcontent=document.getElementsByClassName('Denglu_content')[0]
var PhoneZC=document.getElementById('PhoneZC')
var zas=document.getElementsByClassName('zas')
// 去注册
zas[0].onclick=function(){
    Delcontent.style.display='none'
    PhoneZC.style.display='block'
}
// 返回手机号登录

var sjhdl=document.getElementById('sjhdl')

sjhdl.onclick=function(){
    Delcontent.style.display='block'
    PhoneZC.style.display='none'
}
// 验证
var Fos=document.getElementsByTagName('form')
var WANc=document.getElementById('WANc')
var CUO=document.getElementsByClassName('CUO')
var frt=document.getElementsByClassName('frt')
console.log(CUO)
var ShouJaa=/^1(3|4|5|7|8)([0-9]{9})$/
frt[2].onfocus=function(){
	CUO[2].style.display='none'
}
WANc.onclick=function(){
    if(ShouJaa.test(frt[2].value)==false){
    	CUO[2].innerHTML='手机格式有误'
    	CUO[2].style.margin='10px 0'
    	CUO[2].style.width='358px'
    	CUO[2].style.height='30px'
    	CUO[2].style.display='block'
    	CUO[2].style.color='red'
    }
}