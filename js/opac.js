var PictureBox=document.getElementsByClassName('Picture_H')[0]
var PictureClose=document.getElementsByClassName('Picture_H_close')[0]
var panD;
PictureClose.onclick=function(){
	Tm_hf.style.display='none'
	panD=true;
}
// header头部距离滚动条位置
var obj=document.getElementsByClassName("TOP")[0];//整个top;
window.onscroll=function(){
	if(document.body.scrollTop>580){
		obj.style.display="block";
	}else{
		obj.style.display="none";
	}
	if(document.body.scrollTop<=960){
		Tm_hf.style.display='none'
	}else if(document.body.scrollTop>960){
		if(panD!=true){
			Tm_hf.style.display='block'
		}
		
	}

}

