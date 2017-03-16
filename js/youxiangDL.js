var dui=document.getElementsByClassName('duiall')//对的情况
var cuo=document.getElementsByClassName('cuoall')//错的情况
var yanzV=document.getElementsByClassName('yanzV')//需要验证的input
var Li=document.getElementsByClassName('Lisa')
var Qiko=document.getElementsByClassName('Qiko')
var chus=document.getElementsByClassName('chus')
// 清空输入框
var cacha=document.getElementsByClassName('cacha')
var doo=document.getElementsByClassName('doo')
for(var j=0;j<Qiko.length;j++){
	cacha[j].style.display='none'
	Qiko[j].index=j
	cacha[j].index=j
	Qiko[j].onkeyup=function(){
      cacha[this.index].style.display='block'
	}
	cacha[j].onclick=function(){
		Qiko[this.index].focus()
		for(var j=0;j<Qiko.length;j++){
			doo[j].style.display='none'
		}
        cacha[this.index].style.display='none'
        Qiko[this.index].value=''

	}
}
// 账号验证
// 获取光标
var ZH;
var zhangH=/^(?=.*\d)(?=.*[a-zA-Z]).{6,18}$/
yanzV[0].onfocus=function(){
    yanzV[0].parentNode.style.borderColor='#5DBCFF'
    dui[0].style.display='none'
    cuo[0].style.display='none'   
}
// 移出光标
yanzV[0].onblur=function(){
	if(this.value==''){
		yanzV[0].parentNode.style.borderColor='#ededed'
		dui[0].style.display='none'
        cuo[0].style.display='none'
	}else{
		if(zhangH.test(this.value)==false){
    	    yanzV[0].parentNode.style.borderColor='red'
           dui[0].style.display='none'
           cuo[0].style.display='block'
           ZH=false
           FFas(0)
        }else{
    	    yanzV[0].parentNode.style.borderColor='#ededed'
    	    cuo[0].style.display='none'
    	    dui[0].style.display='block'
    	    ZH=true
        }
	}
    
}
// 密码验证
var MIma;
var MIm=/^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/
// 获取光标
yanzV[1].onfocus=function(){
    yanzV[1].parentNode.style.borderColor='#5DBCFF'
    dui[1].style.display='none'
    cuo[1].style.display='none'
}
// 移出光标
yanzV[1].onblur=function(){
	if(this.value==''){
		yanzV[1].parentNode.style.borderColor='#ededed'
		dui[1].style.display='none'
        cuo[1].style.display='none'
	}else{
		if(zhangH.test(this.value)==false){
    	    yanzV[1].parentNode.style.borderColor='red'
           dui[1].style.display='none'
           cuo[1].style.display='block'
           MIma=false
           FFas(1)
        }else{
    	    yanzV[1].parentNode.style.borderColor='#ededed'
    	    cuo[1].style.display='none'
    	    dui[1].style.display='block'
    	    MIma=true
        }
	}
    
}
// 确认密码---------------
// 获取光标
var Qren;
yanzV[2].onfocus=function(){
    yanzV[2].parentNode.style.borderColor='#5DBCFF'
    dui[2].style.display='none'
    cuo[2].style.display='none'
}
// 移出光标
yanzV[2].onblur=function(){
	if(this.value==''){
		yanzV[2].parentNode.style.borderColor='#ededed'
		dui[2].style.display='none'
        cuo[2].style.display='none'

	}else{
		if(this.value!=yanzV[1].value){
    	    yanzV[2].parentNode.style.borderColor='red'
           dui[2].style.display='none'
           cuo[2].style.display='block'
           Qren=false
           FFas(2)
        }else{
    	    yanzV[2].parentNode.style.borderColor='#ededed'
    	    cuo[2].style.display='none'
    	    dui[2].style.display='block'
    	    Qren=true
        }
	}
    
}
// 手机验证
// 获取光标
var SJ;
var ShouJ=/^1(3|4|5|7|8)([0-9]{9})$/
yanzV[4].onfocus=function(){
    yanzV[4].parentNode.style.borderColor='#5DBCFF'
    dui[4].style.display='none'
    cuo[4].style.display='none'
}
// 移出光标
yanzV[4].onblur=function(){
	if(this.value==''){
		yanzV[4].parentNode.style.borderColor='#ededed'
		dui[4].style.display='none'
        cuo[4].style.display='none'
	}else{
		if(ShouJ.test(this.value)==false){
    	    yanzV[4].parentNode.style.borderColor='red'
           dui[4].style.display='none'
           cuo[4].style.display='block'
           SJ=false
           FFas(4)
        }else{
    	    yanzV[4].parentNode.style.borderColor='#ededed'
    	    cuo[4].style.display='none'
    	    dui[4].style.display='block'
    	    SJ=true
        }
	}
    
}

var Kuang=document.getElementsByClassName('huadong')[0]//滑动按钮框
var Images=document.getElementById('Images')//滑动按钮
var Yz_bigp=document.getElementsByClassName('Yz_bigp')[0]//验证码大图
var Dhua=document.getElementById('Dhua')//验证码小图
var ulc_liDL=document.getElementById('ulc_liDL')
Kuang.onmouseover=function(){
  if(yuo==false){
    Yz_bigp.style.display='block'
  }
	
}
Kuang.onmouseout=function(){
  if(yuo==false){
    Yz_bigp.style.display='none'
  }
	
}
// 按下滑动按钮    
   var isdown;
   // var lp;
   Images.onmousedown=function(){
      isdown=true;
      
      Images.style.left='0'
      lp=event.offsetX//鼠标相对小滑块位置
      console.log(lp)
    }
    var yuo=false;
    document.onmouseup=function(){
      console.log(dinw)
      isdown=false;
      dui[3].style.display='none'
      cuo[3].style.display='none'
      if(dinw>=0&&dinw<=248)
          if(dinw==148){
            Yz_bigp.style.display='none'
            dui[3].style.display='block'
            yuo=true
          }else if(ulc_liDL.offsetLeft!=148){
            yuo=false
            cuo[3].style.display='block'
            FFas(3)
          }
      
    }
   var dinw;
    Kuang.onmousemove=function(){
        //判断是否为点击不放事件
        
        if(isdown==true){
          HDimg.innerHTML=''
        var sub=event.clientX//取得鼠标X坐标   
        var a = ulc_liDL.offsetLeft;
        
         dinw=sub-a-32
        
        if(dinw<0){
          dinw=0
        }
         if(dinw>248){
          dinw=248
        }     
        Images.style.left=dinw+'px'
        Dhua.style.left=dinw+'px'
              
      }   

      }

      // 动画
      function FFas(index){
        cuo[index].style.animation='loo 0.5s ease  alternate'
        
      }
    // 提交表单
var poo=document.getElementsByClassName('poo')[0]
    poo.onclick=function(){
      console.log(jui)
      if (ZH&&MIma&&Qren&&SJ&&yuo==true) {
        jui.submit()
      }
    }
// 验证码
  
  
  