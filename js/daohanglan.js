		var lessons_tixi=document.getElementsByClassName('lessons_tixi')[0];
		var lessons_tixi2=document.getElementsByClassName('lessons_tixi2')[0];
		lessons_tixi.onmouseover=function(){
			lessons_tixi2.style.display='block';
		}
		lessons_tixi.onmouseout=function(){
			lessons_tixi2.style.display='none';
		}
		var download=document.getElementsByClassName('download')[0];
		var downloadApp=document.getElementsByClassName('downloadApp')[0];
		download.onmouseover=function(){
			downloadApp.style.display='block';
		}
		download.onmouseout=function(){
			downloadApp.style.display='none';
		}
		
		
		 var time2;
    (function () {
        var timer=autoLunbo(0);
        document.querySelectorAll('.control>ul>li').forEach(function (element, index) {
            element.addEventListener('click', function (e) {
                //                初始化所有的img透明度都为0
//              console.log(document.querySelectorAll('.img_control>li').length)
                for (var i = 0; i < 7; i++) {
                    document.querySelectorAll('.img_control>li')[i].style.opacity = "0 ";
                }
                document.querySelectorAll('.img_control>li')[index].style.opacity = "1 ";
 
                for (var i = 0; i < 7; i++) {
                    document.querySelectorAll('.control>ul>li')[i].style.height = "10px ";
                    document.querySelectorAll('.control>ul>li')[i].style.lineHeight = "10px ";
                }
                document.querySelectorAll('.control>ul>li')[index].style.height = "20px ";
                document.querySelectorAll('.control>ul>li')[index].style.lineHeight = "20px ";
				
                clearInterval(timer);
                clearInterval(time2);
                time2=autoLunbo(index + 1);
            })
        });
    })()

    function autoLunbo(ind) {
        var timer=setInterval(function () {
         ind = ind > 6 ? 0 : ind;
            for (var i = 0; i < 7; i++) {
                document.querySelectorAll('.img_control>li')[i].style.opacity = "0";
            }
            document.querySelectorAll('.img_control>li')[ind].style.opacity = "1 ";
            
            for (var i = 0; i < 7; i++) {
                document.querySelectorAll('.control>ul>li')[i].style.height = "10px ";
                document.querySelectorAll('.control>ul>li')[i].style.lineHeight = "10px ";
            }
            document.querySelectorAll('.control>ul>li')[ind].style.height = "20px ";
            document.querySelectorAll('.control>ul>li')[ind].style.lineHeight = "20px ";
            ind++;
            ind = ind > 6 ? 0 : ind;
            var array=new Array();
            var array = new Array("#4e1524","#0e0e0e","#3a3839","#303030","#090909",'#fee004','#383b4e'); 
				var lunboimg_right=document.getElementsByClassName('lunboimg_right')[0];
				lunboimg_right.style.backgroundColor=array[ind];
			
//console.log(ind);
        }, 4000);
        return timer;
    }
    


for (var i=0;i<7;i++) {
	var li=document.getElementsByClassName('li');
	var daohanglan_middle_left_list=document.getElementsByClassName('daohanglan_middle_left_list');
	var close=document.getElementsByClassName('close');
	li[i].index=i;
	li[i].onmouseover=function(){
		daohanglan_middle_left_list[this.index].style.display='block'
	}
	li[i].onmouseout=function(){
		daohanglan_middle_left_list[this.index].style.display='none';
	}
	close[i].index=i;
	close[i].onclick=function(){
				daohanglan_middle_left_list[this.index].style.display='none';
			}
}

	var previmg=document.getElementById('previmg');
	var nextimg=document.getElementById('nextimg');
	var img_control=document.getElementsByClassName('img_control')[0];
	img_control.onmouseover=function(){
		previmg.style.display='block';
		nextimg.style.display='block';
	}
	img_control.onmouseout=function(){
		previmg.style.display='none';
		nextimg.style.display='none'
	}
	previmg.onmouseover=function(){
		previmg.style.display='block';
		nextimg.style.display='block';
	}
	nextimg.onmouseover=function(){
		previmg.style.display='block';
		nextimg.style.display='block';
	}
