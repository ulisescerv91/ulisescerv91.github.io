$(document).ready(function(){



				$("#opcionesdiv").slideDown();
		        $("#divreglas").slideUp();
		        $("#vs").slideUp();
		        $("#resultado").slideUp();		         
		      	$("#opc_pc").animate({left:'200px',opacity: '0.0'});
		  
		  $(".opciones").click(function(){

		     $("#opcionesdiv").slideUp();
		      $("#divreglas").slideUp();
		      $("#vs").slideDown();

		      $("#opc_pc").animate({left:'-200px',opacity: '1.0'},1000);
		      $("#resultado").slideDown(1000);
		      $("#img_sheldon").animate({opacity: '1.0'},1000);
		      $("#again").animate({left:'50px'},700);
		      $("#again").animate({left:'-10px'},700);

				
				
		  });//opciones



		  
		  $("#piedra").hover(function(){
		  	 $("#l_piedra").css("opacity","1");
    },function(){
    $("#l_piedra").css("opacity","0");
		  	});//opciones
		

		  $("#papel").hover(function(){
		  	 $("#l_papel").css("opacity","1");
    },function(){
    $("#l_papel").css("opacity","0");
		  	});//opciones

		  $("#tijeras").hover(function(){
		  	 $("#l_tijeras").css("opacity","1");
    },function(){
    $("#l_tijeras").css("opacity","0");
		  	});//opciones

		  $("#lagarto").hover(function(){
		  	 $("#l_lagarto").css("opacity","1");
    },function(){
    $("#l_lagarto").css("opacity","0");
		  	});//opciones

		  $("#spock").hover(function(){
		  	 $("#l_spock").css("opacity","1");
    },function(){
    $("#l_spock").css("opacity","0");
		  	});//opciones

				
		
		   $("#jugar").click(function(){

		        $("#opcionesdiv").slideDown();
		        $("#divreglas").slideUp();
		        $("#vs").slideUp();
		        $("#resultado").slideUp();
		         
		      $("#opc_pc").animate({left:'200px',opacity: '0.1'});
		      $("#img_sheldon").animate({opacity: '0.0'});
		      
				
			});//jugar

		   	$("#ver_reglas").click(function(){
		        
		        $("#opcionesdiv").slideUp();
		        $("#divreglas").slideDown();
		        $("#vs").slideUp();
		        $("#resultado").slideUp();
		         
		      $("#opc_pc").animate({left:'200px',opacity: '0.1'});
		      $("#img_sheldon").animate({opacity: '0.0'});
			});//jugar
		


		   $("#again").click(function(){

		        $("#opcionesdiv").slideDown();
		        $("#divreglas").slideUp();
		        $("#vs").slideUp();
		        $("#resultado").slideUp();
		         
		      $("#opc_pc").animate({left:'200px',opacity: '0.1'});
		      $("#img_sheldon").animate({opacity: '0.0'});
		      
				
			});//jugar

});//ready

function numRandom(mini,maxi){

	var num=Math.floor(Math.random()*(maxi-mini+1)+mini);

		//Math.random generena un numero random entre el max y el min
		//genere desde  0.1 a 0.9 	, por eso, necesitamos redondear el numero
		//math.floor() redondea hacia abajo. Ejemplo [2.5 a 2] y [3.6 a 3]
	return num;
		//num es el valor que regresa  a donde fue llamada la funcion
}


function jugar(x){
	
		//estas son las opciones posibles que puede tomar la maquina o el usuario
	var opciones=["Piedra","Papel","Tijeras","Lagarto","Spock"];
		//se declara la variable para guardar la opcion del usuario
	var opcionUsuario=parseInt(x);
		//se declara y guarda el numero aleatorio que genera  la funcion , este sera tomado como la opcion de la maquina

	var opcionMaquina=numRandom(0,4);

	


	document.getElementById("opc_user").src = "pictures/"+opciones[opcionUsuario]+".PNG";
	document.getElementById("opc_pc").src = "pictures/"+opciones[opcionMaquina]+".PNG";

	
	    
	  

if(opciones[opcionUsuario]==opciones[opcionMaquina]){
	document.getElementById("resultado").innerHTML="Empate";
	document.getElementById("img_sheldon").src = "pictures/sheldonempate.PNG";

	
}		

//cuando se selecciona piedra-- opciones[0]=piedra
else if(opcionUsuario==0){
		if(opciones[opcionMaquina]=='Papel'){
			document.getElementById("resultado").innerHTML="Perdiste..Papel cubre a la piedra";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
		else if(opciones[opcionMaquina]=='Tijeras') {
			document.getElementById("resultado").innerHTML="GANASTE..Piedra aplasta las tijeras";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else if(opciones[opcionMaquina]=='Lagarto') {
			document.getElementById("resultado").innerHTML="GANASTE..Piedra aplasta al lagarto";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Spock vaporiza la piedra";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
	} 	//cuando se selecciona papel-- opciones[1]=papel
	else if(opcionUsuario==1){
		if(opciones[opcionMaquina]=="Tijeras"){
			document.getElementById("resultado").innerHTML="Perdiste..Las tijeras cortan el papel";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
		else if(opciones[opcionMaquina]=="Piedra") {
			document.getElementById("resultado").innerHTML="GANASTE..Papel cubre a la piedra";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else if(opciones[opcionMaquina]=="Spock") {
			document.getElementById("resultado").innerHTML="GANASTE..Papel refuta a Spock";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Lagarto se come el papel";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
	}	//cuando se selecciona papel-- opciones[2]=Tijeras
	else if(opcionUsuario==2){
		if(opciones[opcionMaquina]=="Piedra"){
			document.getElementById("resultado").innerHTML="Perdiste..Piedra aplasta las tijeras";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
		else if(opciones[opcionMaquina]=="Lagarto") {
			document.getElementById("resultado").innerHTML="GANASTE..Tijeras decapitan al lagarto";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else if(opciones[opcionMaquina]=="Papel") {
			document.getElementById("resultado").innerHTML="GANASTE.. Las tijeras cortan el papel";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Spock destroza las tijeras";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
	}	//cuando se selecciona papel-- opciones[3]=Lagarto
	else if(opcionUsuario==3){
		if(opciones[opcionMaquina]=="Tijeras"){
			document.getElementById("resultado").innerHTML="Perdiste..Tijeras decapitan al lagarto";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
		else if(opciones[opcionMaquina]=="Spock") {
			document.getElementById("resultado").innerHTML="GANASTE..Lagarto envenena a Spock";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else if(opciones[opcionMaquina]=="Papel") {
			document.getElementById("resultado").innerHTML="GANASTE..Lagarto se come el papel";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Piedra aplasta al lagarto";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
	}
		//cuando se selecciona papel-- opciones[4]=Spock
	else if(opcionUsuario==4){
		if(opciones[opcionMaquina]=="Papel"){
			document.getElementById("resultado").innerHTML="Perdiste..Papel refuta a Spock";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
		else if(opciones[opcionMaquina]=="Piedra") {
			document.getElementById("resultado").innerHTML="GANASTE..Spock vaporiza la piedra";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else if(opciones[opcionMaquina]=="Tijeras") {
			document.getElementById("resultado").innerHTML="GANASTE..Spock destroza las tijeras";
			document.getElementById("img_sheldon").src = "pictures/sheldonlose.PNG";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Lagarto envenena a Spock";
			document.getElementById("img_sheldon").src = "pictures/sheldon.PNG";
		}
	}

	

}//jugar