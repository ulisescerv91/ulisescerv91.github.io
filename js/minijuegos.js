
  
//funcion que recibe 2 numeros entre los cuales arrojara un
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
	
}		

//cuando se selecciona piedra-- opciones[0]=piedra
else if(opcionUsuario==0){
		if(opciones[opcionMaquina]=='Papel'){
			document.getElementById("resultado").innerHTML="Perdiste..Papel cubre a la piedra";
		}
		else if(opciones[opcionMaquina]=='Tijeras') {
			document.getElementById("resultado").innerHTML="GANASTE..Piedra aplasta las tijeras";
		}
		else if(opciones[opcionMaquina]=='Lagarto') {
			document.getElementById("resultado").innerHTML="GANASTE..Piedra aplasta al lagarto";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Spock vaporiza la piedra";
		}
	} 	//cuando se selecciona papel-- opciones[1]=papel
	else if(opcionUsuario==1){
		if(opciones[opcionMaquina]=="Tijeras"){
			document.getElementById("resultado").innerHTML="Perdiste..Las tijeras cortan el papel";
		}
		else if(opciones[opcionMaquina]=="Piedra") {
			document.getElementById("resultado").innerHTML="GANASTE..Papel cubre a la piedra";
		}
		else if(opciones[opcionMaquina]=="Spock") {
			document.getElementById("resultado").innerHTML="GANASTE..Papel refuta a Spock";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Lagarto se come el papel";
		}
	}	//cuando se selecciona papel-- opciones[2]=Tijeras
	else if(opcionUsuario==2){
		if(opciones[opcionMaquina]=="Piedra"){
			document.getElementById("resultado").innerHTML="Perdiste..Piedra aplasta las tijeras";
		}
		else if(opciones[opcionMaquina]=="Lagarto") {
			document.getElementById("resultado").innerHTML="GANASTE..Tijeras decapitan al lagarto";
		}
		else if(opciones[opcionMaquina]=="Papel") {
			document.getElementById("resultado").innerHTML="GANASTE.. Las tijeras cortan el papel";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Spock destroza las tijeras";
		}
	}	//cuando se selecciona papel-- opciones[3]=Lagarto
	else if(opcionUsuario==3){
		if(opciones[opcionMaquina]=="Tijeras"){
			document.getElementById("resultado").innerHTML="Perdiste..Tijeras decapitan al lagarto";
		}
		else if(opciones[opcionMaquina]=="Spock") {
			document.getElementById("resultado").innerHTML="GANASTE..Lagarto envenena a Spock";
		}
		else if(opciones[opcionMaquina]=="Papel") {
			document.getElementById("resultado").innerHTML="GANASTE..Lagarto se come el papel";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Piedra aplasta al lagarto";
		}
	}
		//cuando se selecciona papel-- opciones[4]=Spock
	else if(opcionUsuario==4){
		if(opciones[opcionMaquina]=="Papel"){
			document.getElementById("resultado").innerHTML="Perdiste..Papel refuta a Spock";
		}
		else if(opciones[opcionMaquina]=="Piedra") {
			document.getElementById("resultado").innerHTML="GANASTE..Spock vaporiza la piedra";
		}
		else if(opciones[opcionMaquina]=="Tijeras") {
			document.getElementById("resultado").innerHTML="GANASTE..Spock destroza las tijeras";
		}
		else {
			document.getElementById("resultado").innerHTML="Perdiste..Lagarto envenena a Spock";
		}
	}
$("#opc_user").animate({left:'10px'});
	

}//jugar




