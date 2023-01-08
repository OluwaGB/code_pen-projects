// Created by Christian D. Fernández

	//DECLARO LOS SIGNOS A USAR
var signos=new Array("0","1","比","§","开","ረ","ن","ট","ঠ","ઈ" ,"维","伊","艾","哦","કે","诶","ای","ح","Ҷ");
	function aletorio() {
		return Math.round(Math.random()*(18)+parseInt(0));
	}
	var cont=0;
	var int=0;
	function linea(){
		cont++;
		if (cont>80) {
			document.getElementById('textM').innerHTML="TRY AGAIN! # "+int+"... <BR> ";
			cont=0;
			int++;
		}else{
				
				document.getElementById('textM').innerHTML+=" &#160"+ signos[aletorio()];
			
		}
			

	}

	setInterval(linea, 35);
