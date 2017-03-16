bodycontentimg();
function bodycontentimg(){
	var img = document.getElementsByClassName('body_content')[0].getElementsByTagName('img');
	var text = document.getElementsByClassName('body_content')[0].getElementsByClassName('p_big');
	var imgbox = document.getElementsByClassName('body_content')[0].getElementsByClassName('imgbox');
	var textbox = document.getElementsByClassName('body_content')[0].getElementsByClassName('list2');
	for(var i = 0;i<imgbox.length;i++){
		imgbox[i].index = i;
		imgbox[i].onmouseover = function(){
			img[this.index].style.transform = 'scale(1.1)';
			img[this.index].style.transition = 'all 1s';
		}
		imgbox[i].onmouseout = function(){
			img[this.index].style.transform = 'scale(1)';
		}
	}
	for(var j = 0;j<textbox.length;j++){
		textbox[j].index = j;
		textbox[j].onmouseover = function(){
			text[this.index].style.color = '#39A030';
		}
		textbox[j].onmouseout = function(){
			text[this.index].style.color = '#333333';
		}
	}
}