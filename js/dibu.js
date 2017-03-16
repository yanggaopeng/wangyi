var alianj=document.getElementsByClassName('alianj')[0]
alianj.onmouseover=function(){
	Asa.style.color='green'
	spaA.style.backgroundPosition='-1px -1690px'
}
alianj.onmouseout=function(){
    Asa.style.color='#333'
    spaA.style.backgroundPosition='-1px -1673px'
}
var BottomA_ula=document.getElementsByClassName('BottomA_ula')[0].getElementsByTagName('li')
for(var i=0;i<BottomA_ula.length;i++){
	BottomA_ula[i].index=i
	
	BottomA_ula[i].onmouseover=function(){
		var aer=BottomA_ula[this.index].getElementsByTagName('a')[0]
        aer.style.color='green'
	}
	BottomA_ula[i].onmouseout=function(){
		var aer=BottomA_ula[this.index].getElementsByTagName('a')[0]
        aer.style.color='#999'
	}
}
// 轮播
BoAula=document.getElementsByClassName('BottomA_ula')[0]
setInterval(lunbo,2000)
var num=0
function lunbo(){
    num++
    if(num%2==1){
    	BoAula.style.marginTop='-8px'
    }else{
    	BoAula.style.marginTop='-35px'
    }
    
}
