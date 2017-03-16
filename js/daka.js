var Daka=document.getElementsByClassName('dak')
var Div=document.getElementsByClassName('Bottom_ul_div')
for(var i=0;i<Daka.length;i++){
	Daka[i].index=i
	Daka[i].onmouseover=function(){
      var opp=Div[this.index].getElementsByTagName('span')
      for(var i=0;i<opp.length;i++){
      	opp[i].style.color='green'
      }
	}
	Daka[i].onmouseout=function(){
		var opp=Div[this.index].getElementsByTagName('span')
      for(var i=0;i<opp.length;i++){
      	opp[i].style.color='#fff'
      }
	}
}