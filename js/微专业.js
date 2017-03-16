weizhuanye();//微专业
function weizhuanye(){
	var ul = document.getElementsByTagName('ul')[0];
	var text = document.getElementsByClassName('weizhuanye_text')[0];
	var prev = document.getElementsByClassName('prev')[0];
	var next = document.getElementsByClassName('next')[0];
	prev.style.display = 'none';
	next.style.display = 'none';
	text.onmouseover = function(){
		prev.style.display = 'block';
		next.style.display = 'block';
	}
	text.onmouseout = function(){
		prev.style.display = 'none';
		next.style.display = 'none';
	}
	prev.onmouseover = function(){
		prev.style.display = 'block';
		next.style.display = 'block';
		prev.style.backgroundPosition = '-53px -68px';
	}
	prev.onmouseout = function(){
		prev.style.backgroundPosition = '1px -68px';
	}
	next.onmouseover = function(){
		prev.style.display = 'block';
		next.style.display = 'block';
		next.style.backgroundPosition = '-77px -68px';
	}
	next.onmouseout = function(){
		next.style.backgroundPosition = '-26px -68px';
	}
	next.onclick = function(){
		text.scrollLeft += 242;
	}
	prev.onclick = function(){
		text.scrollLeft -= 242;
	}
}
imgblow();//鼠标移入图片变大
function imgblow(){
	var img = document.getElementsByClassName('mianfeihaoke_content')[0].getElementsByTagName('img');
	var li = document.getElementsByClassName('mianfeihaoke_content')[0].getElementsByTagName('li');
	var big = document.getElementsByClassName('mianfeihaoke_content')[0].getElementsByClassName('big');
	for(var i = 0;i<img.length;i++){
		li[i].index = i;
		li[i].onmouseover = function(){
			big[this.index].style.color = '#39A030';
			img[this.index].style.transform = 'scale(1.1)';
			img[this.index].style.transition = 'all 1s';
		}
		li[i].onmouseout = function(){
			big[this.index].style.color = '#333333';
			img[this.index].style.transform = 'scale(1)';
		}
	}
}