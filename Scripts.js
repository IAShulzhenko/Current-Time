$(document).ready(function () {

function currentTime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h<10){
		$('#HH').html("0" + h);
	}else $('#HH').html(h);
	if (m<10){
		$('#MM').html("0" + m);
	}else $('#MM').html(m);
	if (s<10){
		$('#SS').html("0" + s);
	}else $('#SS').html(s);
	setInterval(currentTime, 1000);
}	

currentTime();

});
