/*
* @Author: Ding Jianlong
* @Date:   2018-05-18 11:04:10
* @Last Modified by:   Ding Jianlong
* @Last Modified time: 2018-05-18 16:41:18
*/
$(document).ready(function() {
	// alert("断点");
	var autocontent = new Array()
	autocontent[0] = "我";
	autocontent[1] = "我的";
	autocontent[2] = "我的种";
	autocontent[3] = "我的种草";
	autocontent[4] = "我的种草基";
	autocontent[5] = "我的种草基地";
	autocontent[6] = "剁";
	autocontent[7] = "剁手";
	autocontent[8] = "剁手神";
	autocontent[9] = "剁手神器";
	autocontent[10] = "手";
	autocontent[11] = "手机";
	autocontent[12] = "手机里";
	autocontent[13] = "手机里的";
	autocontent[14] = "手机里的随";
	autocontent[15] = "手机里的随身";
	autocontent[16] = "手机里的随身手";
	autocontent[17] = "手机里的随身手账";
	var i = 0;
	function title_auto_js() {
		// alert("断点");
		document.getElementById('title_auto_con').innerHTML = autocontent[i];
		document.getElementById("title_auto_con").innerHTML += "|";
		i++;
		if (i == 18) { i = 0 ; }
	}

	var m = 0;
	var pg1=document.getElementById('pg1');
	function pg_auto() { 
		if(pg1.value!=100) 
			pg1.value++; 
		else 
			pg1.value=0;
		document.getElementById('red_att').style.fontSize = '50px';
		document.getElementById('red_att').style.fontWeight = 'bold';
		document.getElementById('pg1').style.width = '280px';
	}
	setInterval(pg_auto,15);
 
	setInterval(title_auto_js,300);
};)