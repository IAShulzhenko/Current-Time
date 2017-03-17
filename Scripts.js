function currentTime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var hh = document.getElementById("HH");
	var mm = document.getElementById("MM");
	var ss = document.getElementById("SS");
	if (h<10){
		hh.innerHTML = "0" + h;
	}else hh.innerHTML = h;
	if (m<10){
		mm.innerHTML = "0" + m;
	}else mm.innerHTML = m;
	if (s<10){
		ss.innerHTML = "0" + s;
	}else ss.innerHTML = s;
	setInterval(currentTime, 1000)
}

currentTime();
