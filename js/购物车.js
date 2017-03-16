shopping();
function shopping(){
	var danjia = document.getElementsByClassName('commodity')[0].getElementsByClassName('list5');
	var xiaoji = document.getElementsByClassName('commodity')[0].getElementsByClassName('xiaoji');
	quanxuan();//全选功能
	function quanxuan(){
		var all = document.getElementsByName('all');
		var inPut = document.getElementsByTagName('input');
		for(var i = 0;i<all.length;i++){
			all[i].index=i;
			all[i].onclick = function(){
				if (all[this.index].checked==true) {
					for(var j = 0 ;j<inPut.length;j++){
						inPut[j].checked=true;
						xj();
					}
				}else{
					for(var j = 0 ;j<inPut.length;j++){
						inPut[j].checked=false;
						wuxj();
					}
				}
			}
		}
	}
	list();//商品列表的选择和小计的计算
	function list(){
		var first = document.getElementsByName('first');
		var last = document.getElementsByName('last');
		for(var i =0;i<first.length;i++){
			first[i].index=i;
			first[i].onclick = function(){
				if(first[this.index].checked==true){
					last[this.index].checked=true;
				    xiaoji[this.index].innerHTML = danjia[this.index].innerHTML;
				}else{
					last[this.index].checked=false;
					xiaoji[this.index].innerHTML = '0.00';
				}
				hj();
			}
			last[i].index=i;
			last[i].onclick = function(){
				if(last[this.index].checked==true){
					first[this.index].checked=true;
					xiaoji[this.index].innerHTML = danjia[this.index].innerHTML;
				}else{
					first[this.index].checked=false;
					xiaoji[this.index].innerHTML = '0.00';
				}
				hj();
			}
		}
	}
	//全选时的小计值
	function xj(){
		for(var i=0;i<xiaoji.length;i++){
			xiaoji[i].index=i;
			xiaoji[i].innerHTML=danjia[i].innerHTML;
			hj();
		}
	}
	//反选时的小计值
	function wuxj(){
		for (var i=0; i < xiaoji.length; i++) {
			xiaoji[i].index = i;
			xiaoji[i].innerHTML = '0.00'
			hj();
		}
	}
	//合计
	function hj(){
		var heji = document.getElementsByClassName('footer')[0].getElementsByClassName('hj');
		var ab = 0;
		for(var i =0;i<xiaoji.length;i++){
			xiaoji[i].index = i;
			ab += parseFloat(xiaoji[i].innerHTML);
		}
		heji[0].innerHTML = ab.toFixed(2);
		//结算图表变色
		var js = document.getElementsByClassName('footer')[0].getElementsByClassName('jiesuan')[0];
		if(ab!=0){
			js.style.backgroundColor = '#FF3900';
		}else{
			js.style.backgroundColor = '#ccc';
		}
	}
	//删除
	shanchu();
	function shanchu(){
		var sc = document.getElementsByClassName('commodity')[0].getElementsByClassName('list6');
		var commodity = document.getElementsByClassName('commodity')[0];
		for(var i =0;i<sc.length;i++){
			sc[i].index = i;
			sc[i].onclick = function(){
				var obj = this.parentNode.parentNode.parentNode;
				commodity.removeChild(obj);
				hj();
				list();
				shuliang();
			}
		}
	}
	//总商品数量
	shuliang();
	function shuliang(){
		var number = document.getElementsByClassName('number')[0];
		var sc = document.getElementsByClassName('commodity')[0].getElementsByClassName('list6');
		number.innerHTML = sc.length;
	}
}