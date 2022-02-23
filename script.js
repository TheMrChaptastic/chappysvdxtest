document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
window.addEventListener('mousemove', mousemove);

function keyDown(e){
	switch(e.code.toString()){
		case "Digit1":
			document.getElementById('Start').style.backgroundColor = "lightblue";
			break;
		case "KeyD":
			document.getElementById('BT-A').style.backgroundColor = "lightblue";
			break;	
		case "KeyF":
			document.getElementById('BT-B').style.backgroundColor = "lightblue";
			break;	
		case "KeyJ":
			document.getElementById('BT-C').style.backgroundColor = "lightblue";
			break;	
		case "KeyK":
			document.getElementById('BT-D').style.backgroundColor = "lightblue";
			break;
		case "KeyC":
			document.getElementById('FX-L').style.backgroundColor = "red";
			break;	
		case "KeyM":
			document.getElementById('FX-R').style.backgroundColor = "red";
			break;		
	}
}
function keyUp(e){
	switch(e.code.toString()){
		case "Digit1":
			document.getElementById('Start').style.backgroundColor = "darkgray";
			break;
		case "KeyD":
			document.getElementById('BT-A').style.backgroundColor = "darkgray";
			break;	
		case "KeyF":
			document.getElementById('BT-B').style.backgroundColor = "darkgray";
			break;	
		case "KeyJ":
			document.getElementById('BT-C').style.backgroundColor = "darkgray";
			break;	
		case "KeyK":
			document.getElementById('BT-D').style.backgroundColor = "darkgray";
			break;
		case "KeyC":
			document.getElementById('FX-L').style.backgroundColor = "darkgray";
			break;	
		case "KeyM":
			document.getElementById('FX-R').style.backgroundColor = "darkgray";
			break;		
	}
}

var pageX = 0;
var pageY = 0;
function mousemove(event){
	if (event.pageX != pageX){
		if (event.pageX > pageX){
			pageX = event.pageX;
			document.getElementById('VOL-R').style.backgroundColor = "red";
		}
		else{
			pageX = event.pageX;
			document.getElementById('VOL-R').style.backgroundColor = "lightpink";
		}
	}
    if (event.pageY != pageY){
		if (event.pageY > pageY){
			pageY = event.pageY;
			document.getElementById('VOL-L').style.backgroundColor = "blue";
		}
		else{
			pageY = event.pageY;
			document.getElementById('VOL-L').style.backgroundColor = "lightblue";
		}
	}
}
