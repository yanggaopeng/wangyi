		var youxin=document.getElementsByClassName('footer_youxin')[0];
		var weixin=document.getElementsByClassName('footer_weixin')[0];
		var erweima1=document.getElementsByClassName('erweima1')[0];
		var erweima2=document.getElementsByClassName('erweima2')[0];
		youxin.onmouseover=function(){
			erweima1.style.display='block';
		}
		youxin.onmouseout=function(){
			erweima1.style.display='none';
		}
		weixin.onmouseover=function(){
			erweima2.style.display='block';
		}
		weixin.onmouseout=function(){
			erweima2.style.display='none';
		}